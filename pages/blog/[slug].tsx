import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts, BlogPost } from '../../lib/blog';

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostPage({ post, relatedPosts }: BlogPostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">読み込み中...</div>
      </div>
    );
  }

  const shareUrl = `https://offshoreflow.com/blog/${post.slug}`;
  const shareText = `${post.title} - OffshoreFlow Engineer Training`;

  return (
    <>
      <Head>
        <title>{post.title} - OffshoreFlow Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        {post.thumbnail && <meta property="og:image" content={post.thumbnail} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.thumbnail && <meta name="twitter:image" content={post.thumbnail} />}
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Navigation />

        {/* Hero Section with Thumbnail */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative pt-32 pb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

          <div className="relative container mx-auto px-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              ブログ一覧に戻る
            </Link>

            {post.thumbnail && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8 rounded-xl overflow-hidden max-w-4xl mx-auto"
              >
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400 text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 text-xs">
                  {post.category}
                </span>
                <span className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {new Date(post.date).toLocaleDateString('ja-JP')}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-2" />
                  {post.readingTime}
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-2" />
                  {post.author}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag)}`}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm hover:bg-gray-700 transition-colors"
                  >
                    <FaTag className="mr-1 text-xs" />
                    {tag}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12"
              >
                {/* Blog Content */}
                <div
                  className="markdown-content max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">この記事をシェア</h3>
                  <div className="flex gap-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaFacebookSquare className="text-xl" />
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      <FaTwitterSquare className="text-xl" />
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-8">関連記事</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group"
                      >
                        <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 h-full">
                          {relatedPost.thumbnail && (
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={relatedPost.thumbnail}
                                alt={relatedPost.title}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <span className="inline-block px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300 mb-3">
                              {relatedPost.category}
                            </span>
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-3 mb-3">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>{new Date(relatedPost.date).toLocaleDateString('ja-JP')}</span>
                              <span className="mx-2">•</span>
                              <span>{relatedPost.readingTime}</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;

  try {
    const post = await getPostBySlug(slug);
    const relatedPosts = await getRelatedPosts(slug);

    return {
      props: {
        post,
        relatedPosts,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
