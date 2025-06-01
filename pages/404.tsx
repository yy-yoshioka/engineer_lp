import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaHome, FaSearch, FaRocket, FaSadTear } from 'react-icons/fa';

const Custom404 = () => {
  const popularPages = [
    { href: '/faq', label: 'よくある質問' },
    { href: '/blog', label: 'ブログ' },
    { href: '/services/practical-development', label: 'プログラム詳細' },
    { href: '/contact', label: 'お問い合わせ' },
    { href: '/pricing-consultation', label: '料金プラン' },
    { href: '/career-success', label: '転職実績' },
  ];

  return (
    <>
      <Head>
        <title>404 - ページが見つかりません | OffshoreFlow</title>
        <meta name="description" content="お探しのページが見つかりませんでした。" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-black text-white pt-16">
        <section className="relative min-h-[80vh] flex items-center justify-center">
          {/* Background gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-800/30 to-orange-700/30 opacity-50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-8">
                <FaSadTear className="text-6xl" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                404
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl mb-8 text-gray-300"
            >
              ページが見つかりません
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              申し訳ございません。お探しのページは移動または削除された可能性があります。
              <br />
              以下のリンクから目的のページをお探しください。
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <FaHome />
                ホームに戻る
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaRocket />
                無料カウンセリング
              </Link>
            </motion.div>

            {/* Popular Pages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-xl font-semibold mb-6 text-gray-300">
                <FaSearch className="inline-block mr-2" />
                人気のページ
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all hover:scale-105 border border-gray-800 hover:border-purple-500"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Custom404;
