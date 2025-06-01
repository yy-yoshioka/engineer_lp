import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  tags: string[];
  thumbnail?: string;
  content?: string;
  readingTime: string;
  featured?: boolean;
}

// すべてのブログ記事のスラッグを取得
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// スラッグからブログ記事データを取得
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matterでフロントマターとコンテンツを分離
  const { data, content } = matter(fileContents);

  // reading-timeで読了時間を計算
  const stats = readingTime(content);

  // MarkdownをHTMLに変換
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    category: data.category,
    tags: data.tags || [],
    thumbnail: data.thumbnail,
    content: contentHtml,
    readingTime: `${Math.ceil(stats.minutes)}分`,
    featured: data.featured || false,
  };
}

// すべてのブログ記事を取得（リスト表示用）
export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        category: data.category,
        tags: data.tags || [],
        thumbnail: data.thumbnail,
        readingTime: `${Math.ceil(stats.minutes)}分`,
        featured: data.featured || false,
      };
    })
  );

  // 日付でソート（新しい順）
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// カテゴリー別にブログ記事を取得
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

// タグ別にブログ記事を取得
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

// 関連記事を取得（同じカテゴリーまたはタグ）
export async function getRelatedPosts(slug: string, limit: number = 3): Promise<BlogPost[]> {
  const currentPost = await getPostBySlug(slug);
  const allPosts = await getAllPosts();

  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      // スコアを計算（同じカテゴリー: 2点、同じタグ: 各1点）
      let score = 0;
      if (post.category === currentPost.category) score += 2;
      currentPost.tags.forEach((tag) => {
        if (post.tags.includes(tag)) score += 1;
      });
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  return relatedPosts;
}
