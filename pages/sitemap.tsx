import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  FaSitemap,
  FaHome,
  FaGraduationCap,
  FaQuestionCircle,
  FaInfoCircle,
  FaFileContract,
} from 'react-icons/fa';

const SitemapPage = () => {
  const siteStructure = [
    {
      category: 'メイン',
      icon: FaHome,
      pages: [
        { href: '/', label: 'ホーム' },
        { href: '/contact', label: 'お問い合わせ' },
        { href: '/download-guide', label: '無料ガイドブック' },
      ],
    },
    {
      category: 'プログラム・サービス',
      icon: FaGraduationCap,
      pages: [
        { href: '/services/practical-development', label: '実践的な開発学習' },
        { href: '/services/global-experience', label: 'グローバル開発体験' },
        { href: '/services/career-support', label: '転職サポート' },
        { href: '/curriculum', label: 'カリキュラム' },
        { href: '/pricing-consultation', label: '料金プラン相談' },
      ],
    },
    {
      category: 'サポート・実績',
      icon: FaQuestionCircle,
      pages: [
        { href: '/faq', label: 'よくある質問' },
        { href: '/schedule-examples', label: '学習スケジュール例' },
        { href: '/demo-video', label: 'デモ動画' },
        { href: '/career-success', label: '転職実績' },
        { href: '/success-stories', label: '成功事例' },
        { href: '/community-events', label: 'コミュニティ・イベント' },
        { href: '/comparison', label: '他社比較' },
      ],
    },
    {
      category: '会社情報',
      icon: FaInfoCircle,
      pages: [
        { href: '/company', label: '会社概要' },
        { href: '/blog', label: 'ブログ' },
      ],
    },
    {
      category: '法的情報',
      icon: FaFileContract,
      pages: [
        { href: '/terms', label: '利用規約' },
        { href: '/privacy', label: 'プライバシーポリシー' },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>サイトマップ - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowのサイト構成一覧。すべてのページへのリンクをご確認いただけます。"
        />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-purple-900/20 to-pink-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-600 to-purple-600 rounded-2xl mb-6">
                <FaSitemap className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                サイト
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-600">
                  マップ
                </span>
              </h1>
              <p className="text-xl text-gray-300">OffshoreFlowの全ページ一覧です</p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteStructure.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <section.icon className="text-xl" />
                      </div>
                      <h2 className="text-xl font-bold">{section.category}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.pages.map((page) => (
                        <li key={page.href}>
                          <Link
                            href={page.href}
                            className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                          >
                            → {page.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Additional Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-300">外部リンク</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://discord.gg/offshoreflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Discord コミュニティ
                  </a>
                  <span className="text-gray-600">|</span>
                  <a
                    href="https://youtube.com/@offshoreflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    YouTube チャンネル
                  </a>
                  <span className="text-gray-600">|</span>
                  <a
                    href="https://twitter.com/offshoreflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Twitter
                  </a>
                  <span className="text-gray-600">|</span>
                  <a
                    href="https://github.com/offshoreflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SitemapPage;
