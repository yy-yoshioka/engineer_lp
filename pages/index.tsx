// pages/index.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { generateOrganizationSchema, generateWebsiteSchema } from '../lib/seo';
import {
  FaRocket,
  FaCode,
  FaGlobeAmericas,
  FaChartLine,
  FaUserGraduate,
  FaBriefcase,
  FaCheckCircle,
  FaStar,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaFire,
  FaHeart,
  FaYoutube,
  FaPlay,
  FaArrowRight,
  FaBook,
  FaLightbulb,
  FaDownload,
  FaComments,
} from 'react-icons/fa';

const Home = () => {
  const [showDemo, setShowDemo] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // GTM/GA用のイベントトラッキング（実装時に使用）
  const trackEvent = (action: string, category: string, label?: string) => {
    // Google Analytics tracking code here
    console.log('Track:', { action, category, label });
  };

  // 構造化データを生成
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const combinedSchema = [organizationSchema, websiteSchema];

  return (
    <>
      <SEO
        title="OffshoreFlow - 未経験から3ヶ月でエンジニア転職"
        description="未経験から3ヶ月でエンジニア転職を実現。実践的なプログラミング学習とキャリアサポートで年収600万円以上のエンジニアを目指せます。転職成功率92%の実績。"
        keywords={[
          'プログラミング学習',
          'エンジニア転職',
          '未経験',
          'オンライン学習',
          'キャリアチェンジ',
          'Web開発',
          'JavaScript',
          'React',
          'Node.js',
          '転職サポート',
        ]}
        canonicalUrl="https://offshoreflow.com/"
        structuredData={combinedSchema}
      />

      {/* Navigation */}
      <Navigation />

      <main className="min-h-screen bg-black text-white overflow-x-hidden pt-16">
        {/* Hero Section with Clear CTAs */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
                <FaFire className="text-orange-400" />
                <span className="text-sm font-medium">今なら入会金50%OFF！残り3名</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              たった
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                3ヶ月
              </span>
              で
              <br />
              人生変わる、
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                マジで。
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            >
              未経験から年収600万円のエンジニアへ 🚀
              <br />
              オフショア開発 × 最新技術で最速キャリアチェンジ
            </motion.p>

            {/* Main and Sub CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              {/* Main CTA */}
              <motion.a
                href="/contact"
                onClick={() => trackEvent('click', 'cta', 'hero-main')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                無料カウンセリング予約
                <FaRocket />
              </motion.a>

              {/* Sub CTAs */}
              <motion.button
                onClick={() => {
                  setShowDemo(true);
                  trackEvent('click', 'cta', 'hero-demo');
                }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="text-sm" />
                デモを体験
              </motion.button>
            </motion.div>

            {/* Additional Sub CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 text-sm"
            >
              <Link
                href="/download-guide"
                onClick={() => trackEvent('click', 'cta', 'hero-download')}
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                <FaDownload />
                無料ガイドブック
              </Link>
              <span className="text-gray-500">|</span>
              <a
                href="https://discord.gg/offshoreflow"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click', 'cta', 'hero-community')}
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                <FaDiscord />
                コミュニティ参加
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="https://youtube.com/@offshoreflow"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click', 'cta', 'hero-youtube')}
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                <FaYoutube />
                解説動画
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-8 text-sm mt-12"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-black"
                    />
                  ))}
                </div>
                <span className="text-gray-300">500+ 卒業生</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="text-gray-300 ml-2">4.8/5.0</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </section>

        {/* Demo Modal (簡易実装) */}
        {showDemo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full"
            >
              <h3 className="text-2xl font-bold mb-4">デモ体験</h3>
              <p className="text-gray-400 mb-6">
                実際の開発環境を体験できます。以下からお選びください：
              </p>
              <div className="space-y-4">
                <a
                  href="https://demo.offshoreflow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'demo', 'full-demo')}
                  className="block bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-4 transition-colors"
                >
                  フルデモ環境を体験 →
                </a>
                <Link
                  href="/demo-video"
                  onClick={() => trackEvent('click', 'demo', 'video-demo')}
                  className="block bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-4 transition-colors"
                >
                  デモ動画を見る →
                </Link>
              </div>
              <button
                onClick={() => setShowDemo(false)}
                className="mt-6 text-gray-400 hover:text-white transition-colors"
              >
                閉じる
              </button>
            </motion.div>
          </div>
        )}

        {/* Stats Section - Quick Trust Building */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { number: '3ヶ月', label: '最短卒業期間', icon: FaRocket },
                { number: '80%', label: '転職成功率', icon: FaBriefcase },
                { number: '600万', label: '平均年収', icon: FaChartLine },
                { number: '24/7', label: 'サポート体制', icon: FaHeart },
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4">
                    <stat.icon className="text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What is OffshoreFlow - with Service Details */}
        <section id="program" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                OffshoreFlow って
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  なに？
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ただのプログラミングスクールじゃない。
                <br />
                リアルな開発現場 × 海外エンジニアとのコラボで、
                <br />
                即戦力エンジニアを目指す実践型プログラム 💪
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {[
                {
                  icon: FaCode,
                  title: '実務レベルの開発',
                  desc: '教科書じゃなくて、実際のプロダクト開発を通して学ぶ',
                  link: '/services/practical-development',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: FaGlobeAmericas,
                  title: 'グローバル体験',
                  desc: 'ベトナム・インドのエンジニアと英語でコミュニケーション',
                  link: '/services/global-experience',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: FaUserGraduate,
                  title: '転職サポート',
                  desc: '履歴書添削から面接対策、企業紹介まで完全バックアップ',
                  link: '/services/career-support',
                  color: 'from-purple-500 to-pink-500',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`,
                    }}
                  />
                  <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-transparent transition-all duration-300 h-full flex flex-col">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6`}
                    >
                      <item.icon className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{item.desc}</p>
                    <a
                      href={item.link}
                      onClick={() => trackEvent('click', 'service-detail', item.title)}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      詳しく見る <FaArrowRight className="text-sm" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Program Overview CTA */}
            <div className="text-center">
              <motion.a
                href="/contact"
                onClick={() => trackEvent('click', 'cta', 'program-overview')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                プログラムについて相談する
              </motion.a>
            </div>
          </div>
        </section>

        {/* Video Introduction Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                動画で分かる
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  OffshoreFlow
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group">
                <Image
                  src="/api/placeholder/896/504"
                  alt="Video thumbnail"
                  width={896}
                  height={504}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <a
                    href="https://youtube.com/watch?v=demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click', 'video', 'intro-video')}
                    className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
                  >
                    <FaPlay className="text-3xl text-white ml-1" />
                  </a>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://youtube.com/@offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'youtube', 'channel')}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaYoutube />
                  YouTubeチャンネルで他の動画も見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories with CTA */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                先輩たちの
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  サクセスストーリー
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {[
                {
                  name: 'Takumi (23歳)',
                  before: 'フリーター',
                  after: 'フロントエンドエンジニア @ スタートアップ',
                  salary: '年収450万',
                  comment: 'まじで人生変わった。コード書くの楽しすぎて毎日が充実してる！',
                  avatar: 'T',
                  caseId: 'takumi-23',
                },
                {
                  name: 'Yui (26歳)',
                  before: '事務職',
                  after: 'フルスタックエンジニア @ メガベンチャー',
                  salary: '年収600万',
                  comment: '女性エンジニアの仲間もたくさんできて、キャリアの選択肢が広がった！',
                  avatar: 'Y',
                  caseId: 'yui-26',
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 relative overflow-hidden group hover:border-purple-500 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold">
                        {story.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {story.before} → {story.after}
                        </p>
                        <p className="text-green-400 font-bold mt-1">{story.salary}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 italic mb-4">&quot;{story.comment}&quot;</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                      <a
                        href={`/success-stories/${story.caseId}`}
                        onClick={() => trackEvent('click', 'success-story', story.name)}
                        className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                      >
                        詳細を見る <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success Stories CTA */}
            <div className="text-center space-y-4">
              <Link
                href="/success-stories"
                onClick={() => trackEvent('click', 'cta', 'all-success-stories')}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <FaBook />
                他の成功事例を見る
              </Link>
              <div>
                <motion.a
                  href="/contact"
                  onClick={() => trackEvent('click', 'cta', 'success-stories')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  あなたも成功者になる
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing with Clear CTAs */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                料金
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  プラン
                </span>
              </h2>
              <p className="text-xl text-gray-400">自分のペースに合わせて選べる3つのプラン</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {[
                {
                  name: 'スタンダード',
                  price: '月額 29,800円',
                  duration: '3ヶ月〜',
                  features: [
                    '週2回のオンライン授業',
                    '24/7 Discordサポート',
                    '転職サポート',
                    'ポートフォリオ作成支援',
                  ],
                  popular: false,
                  cta: 'このプランで始める',
                  ctaLink: '/contact?plan=standard',
                },
                {
                  name: 'プレミアム',
                  price: '月額 49,800円',
                  duration: '3ヶ月〜',
                  features: [
                    'スタンダードの全て',
                    '週1回の1on1メンタリング',
                    '企業紹介・推薦状',
                    '英語学習サポート',
                    '実務プロジェクト参加',
                  ],
                  popular: true,
                  cta: '人気No.1プランで始める',
                  ctaLink: '/contact?plan=premium',
                },
                {
                  name: 'ブートキャンプ',
                  price: '一括 398,000円',
                  duration: '3ヶ月集中',
                  features: [
                    'プレミアムの全て',
                    '毎日の個別指導',
                    '転職保証付き',
                    'MacBook Pro貸与',
                    '卒業後も永久サポート',
                  ],
                  popular: false,
                  cta: '最速で転職する',
                  ctaLink: '/contact?plan=bootcamp',
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-600 text-black text-sm font-bold px-4 py-1 rounded-full z-10">
                      一番人気！
                    </div>
                  )}

                  <div
                    className={`bg-gray-800 rounded-3xl p-8 h-full border ${
                      plan.popular ? 'border-yellow-500' : 'border-gray-700'
                    } hover:border-purple-500 transition-all duration-300 flex flex-col`}
                  >
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {plan.price}
                    </p>
                    <p className="text-gray-400 text-sm mb-6">{plan.duration}</p>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href={plan.ctaLink}
                      onClick={() => trackEvent('click', 'pricing', plan.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block text-center py-3 rounded-full font-bold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-600 text-black hover:shadow-lg hover:shadow-orange-500/25'
                          : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }`}
                    >
                      {plan.cta}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pricing Additional Info */}
            <div className="text-center space-y-4">
              <p className="text-gray-400">どのプランがいいか迷ってる？</p>
              <Link
                href="/pricing-consultation"
                onClick={() => trackEvent('click', 'cta', 'pricing-consultation')}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <FaLightbulb />
                無料でプラン相談する
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ with Links */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                よくある
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  質問
                </span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4 mb-12">
              {[
                {
                  q: '完全未経験でも大丈夫？',
                  a: 'もちろん！受講生の8割が未経験スタート。基礎の基礎から丁寧に教えます。',
                  link: { text: 'カリキュラム詳細', url: '/curriculum' },
                },
                {
                  q: '仕事しながらでも続けられる？',
                  a: '週15-20時間の学習時間が目安。録画授業もあるので、自分のペースでOK！',
                  link: { text: '学習スケジュール例', url: '/schedule-examples' },
                },
                {
                  q: '他のスクールとの違いは？',
                  a: '実際のオフショア開発を体験できるのはうちだけ。グローバルで活躍できるエンジニアになれます。',
                  link: { text: '他社比較表', url: '/comparison' },
                },
                {
                  q: '転職サポートの内容は？',
                  a: '履歴書添削、ポートフォリオ作成、面接練習、企業紹介まで完全サポート。内定まで伴走します。',
                  link: { text: '転職実績', url: '/career-success' },
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-purple-400">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 pl-6 mb-2">
                    <span className="text-purple-400">A.</span> {faq.a}
                  </p>
                  {faq.link && (
                    <a
                      href={faq.link.url}
                      onClick={() => trackEvent('click', 'faq-link', faq.link.text)}
                      className="pl-6 text-sm text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                    >
                      {faq.link.text} <FaArrowRight className="text-xs" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* FAQ CTA */}
            <div className="text-center space-y-4">
              <p className="text-gray-400">解決しない疑問がある？</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/faq"
                  onClick={() => trackEvent('click', 'cta', 'all-faqs')}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaBook />
                  すべてのFAQを見る
                </Link>
                <motion.a
                  href="/contact"
                  onClick={() => trackEvent('click', 'cta', 'faq')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  直接質問する
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                仲間と一緒に
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  成長しよう
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                500人以上の仲間が待ってる。質問し放題、モチベーション維持も楽勝！
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <motion.a
                href="https://discord.gg/offshoreflow"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click', 'community', 'discord')}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaDiscord className="text-4xl" />
                  <h3 className="text-2xl font-bold">Discord コミュニティ</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  24/7でエンジニアと繋がれる。質問・雑談・もくもく会など盛りだくさん！
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  今すぐ参加 <FaArrowRight />
                </span>
              </motion.a>

              <motion.a
                href="/community-events"
                onClick={() => trackEvent('click', 'community', 'events')}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-600 to-orange-600 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaComments className="text-4xl" />
                  <h3 className="text-2xl font-bold">定期イベント</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  週1の勉強会、月1のハッカソン、交流会など楽しいイベント満載！
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  イベント一覧 <FaArrowRight />
                </span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Final CTA Section with Multiple Options */}
        <section id="cta" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                今から3ヶ月後、
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  新しい自分に会える
                </span>
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
                迷ってる時間がもったいない。
                <br />
                まずは無料カウンセリングで話を聞いてみよう 🚀
              </p>

              {/* Main CTA */}
              <motion.a
                href="/contact"
                onClick={() => trackEvent('click', 'cta', 'final-main')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-black px-10 py-5 rounded-full text-lg hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                無料カウンセリングを予約する
                <FaRocket />
              </motion.a>

              <p className="text-gray-400 mb-8">
                ※ 無理な勧誘は一切しません。安心してご相談ください。
              </p>

              {/* Sub CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/download-guide"
                  onClick={() => trackEvent('click', 'cta', 'final-guide')}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <FaDownload />
                  無料ガイドブック
                </Link>
                <a
                  href="https://demo.offshoreflow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'cta', 'final-demo')}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <FaPlay />
                  デモを体験
                </a>
                <a
                  href="https://discord.gg/offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'cta', 'final-community')}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <FaDiscord />
                  コミュニティ参加
                </a>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.a
                  href="https://twitter.com/offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'social', 'twitter')}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaTwitter className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://discord.gg/offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'social', 'discord')}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaDiscord className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://github.com/offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'social', 'github')}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://youtube.com/@offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click', 'social', 'youtube')}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaYoutube className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
