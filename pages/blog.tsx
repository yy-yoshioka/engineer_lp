import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaBlog,
  FaCode,
  FaBriefcase,
  FaTrophy,
  FaTools,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaArrowRight,
  FaSearch,
} from 'react-icons/fa';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'すべて', icon: FaBlog },
    { id: 'programming', name: 'プログラミング', icon: FaCode },
    { id: 'career', name: 'キャリア', icon: FaBriefcase },
    { id: 'success', name: '成功事例', icon: FaTrophy },
    { id: 'tips', name: '学習Tips', icon: FaTools },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '【2024年版】React初心者が最初に学ぶべき10の概念',
      excerpt:
        'Reactを始めたばかりの方に向けて、最初に理解すべき重要な概念を分かりやすく解説します。コンポーネント、state、propsなど...',
      category: 'programming',
      author: '山田太郎',
      date: '2024-03-10',
      readTime: '5分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['React', 'JavaScript', '初心者向け'],
      featured: true,
    },
    {
      id: 2,
      title: '未経験から3ヶ月でエンジニア転職に成功した私の学習法',
      excerpt:
        '営業職から転職して年収150万円アップ。効率的な学習方法と転職活動のコツを実体験を基に詳しくお伝えします。',
      category: 'success',
      author: '佐藤花子',
      date: '2024-03-08',
      readTime: '8分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['転職', '体験談', '学習法'],
      featured: true,
    },
    {
      id: 3,
      title: 'TypeScriptを使うべき5つの理由',
      excerpt:
        'JavaScriptからTypeScriptへの移行を検討している方へ。型安全性がもたらすメリットと実践的な導入方法を解説。',
      category: 'programming',
      author: '鈴木一郎',
      date: '2024-03-05',
      readTime: '6分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['TypeScript', 'JavaScript', '開発効率'],
      featured: false,
    },
    {
      id: 4,
      title: 'エンジニア面接でよく聞かれる技術質問TOP20',
      excerpt:
        '実際の面接で頻出する技術的な質問と、その回答例をまとめました。面接対策に必見の内容です。',
      category: 'career',
      author: '田中次郎',
      date: '2024-03-03',
      readTime: '10分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['面接対策', '転職', 'キャリア'],
      featured: false,
    },
    {
      id: 5,
      title: '効率的なコードレビューの進め方',
      excerpt:
        'チーム開発で重要なコードレビュー。建設的なフィードバックの方法と、レビューを受ける際の心構えについて。',
      category: 'tips',
      author: '高橋美咲',
      date: '2024-02-28',
      readTime: '7分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['チーム開発', 'コードレビュー', 'コミュニケーション'],
      featured: false,
    },
    {
      id: 6,
      title: 'Git/GitHubの基本操作完全ガイド',
      excerpt:
        'バージョン管理の基礎から、プルリクエストの作成まで。現場で必要なGitの知識を体系的に学べます。',
      category: 'programming',
      author: '伊藤健太',
      date: '2024-02-25',
      readTime: '12分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['Git', 'GitHub', 'バージョン管理'],
      featured: false,
    },
    {
      id: 7,
      title: '30代未経験からのエンジニア転職は可能か？',
      excerpt: '年齢は関係ない！30代で転職に成功した3人の体験談から学ぶ、成功のポイントとは。',
      category: 'success',
      author: '中村洋介',
      date: '2024-02-20',
      readTime: '9分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['30代転職', '未経験', '体験談'],
      featured: false,
    },
    {
      id: 8,
      title: 'プログラミング学習のモチベーション維持法',
      excerpt:
        '挫折しそうになった時の対処法。継続的に学習を続けるための実践的なテクニックを紹介します。',
      category: 'tips',
      author: '小林由美',
      date: '2024-02-15',
      readTime: '6分',
      thumbnail: '/api/placeholder/600/400',
      tags: ['学習法', 'モチベーション', '継続'],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      <Head>
        <title>ブログ - OffshoreFlow</title>
        <meta
          name="description"
          content="プログラミング学習、キャリア形成、転職成功事例など、エンジニアを目指す方に役立つ情報を発信。"
        />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              OffshoreFlow
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              無料カウンセリング
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6">
                <FaBlog className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                OffshoreFlow
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  ブログ
                </span>
              </h1>
              <p className="text-xl text-gray-300">エンジニアを目指すあなたに役立つ情報を発信</p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="記事を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="text-sm" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <section className="py-12 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">注目の記事</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                  >
                    <div className="aspect-video bg-gray-700" />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt />
                          {new Date(post.date).toLocaleDateString('ja-JP')}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        続きを読む
                        <FaArrowRight />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredPosts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-400">該当する記事が見つかりませんでした。</p>
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all group"
                    >
                      <div className="aspect-video bg-gray-800" />
                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <FaUser />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString('ja-JP')}
                          </span>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4">最新記事をメールでお届け</h2>
              <p className="text-gray-300 mb-8">プログラミング学習に役立つ情報を週1回配信します</p>
              <form
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-6 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  購読する
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
