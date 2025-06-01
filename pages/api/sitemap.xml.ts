import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '../../lib/blog';
import { staticPages } from '../../lib/seo';

const generateSitemap = async () => {
  const baseUrl = 'https://offshoreflow.com';

  // 静的ページ
  const staticUrls = staticPages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`;
    })
    .join('');

  // ブログ記事
  const posts = await getAllPosts();
  const blogUrls = posts
    .map((post) => {
      return `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`;
    })
    .join('');

  // 成功事例（想定）
  const successStoryUrls = [1, 2, 3, 4, 5, 6]
    .map((id) => {
      return `
    <url>
      <loc>${baseUrl}/success-stories/${id}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${staticUrls}
  ${blogUrls}
  ${successStoryUrls}
</urlset>`;

  return sitemap;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sitemap = await generateSitemap();

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).end();
  }
}
