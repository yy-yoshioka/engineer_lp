// pages/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
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
  FaUsers,
  FaFire,
  FaHeart,
  FaGamepad,
} from 'react-icons/fa';

const Home = () => {
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

  return (
    <>
      <Head>
        <title>OffshoreFlow - 3ヶ月で人生変わる、マジで。</title>
        <meta
          name="description"
          content="未経験からフルスタックエンジニアへ。オフショア開発×最新技術で最速キャリアチェンジ"
        />
      </Head>

      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section with Gradient Background */}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.a
                href="#cta"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                無料カウンセリング予約
                <FaRocket />
              </motion.a>
              <motion.a
                href="#program"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                まずは詳細を見る
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-8 text-sm"
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

        {/* Stats Section */}
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

        {/* What is OffshoreFlow */}
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

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: FaCode,
                  title: '実務レベルの開発',
                  desc: '教科書じゃなくて、実際のプロダクト開発を通して学ぶ',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: FaGlobeAmericas,
                  title: 'グローバル体験',
                  desc: 'ベトナム・インドのエンジニアと英語でコミュニケーション',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: FaUserGraduate,
                  title: '転職サポート',
                  desc: '履歴書添削から面接対策、企業紹介まで完全バックアップ',
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
                  <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-transparent transition-all duration-300">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6`}
                    >
                      <item.icon className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                なんで
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  OffshoreFlow
                </span>
                なの？
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    icon: FaFire,
                    title: '爆速成長',
                    desc: '3ヶ月で0→100。独学の10倍速で成長できる環境',
                  },
                  {
                    icon: FaGamepad,
                    title: '楽しく学べる',
                    desc: 'ゲーム感覚のカリキュラムで挫折知らず',
                  },
                  {
                    icon: FaUsers,
                    title: '仲間ができる',
                    desc: '同期や先輩エンジニアとDiscordで24時間繋がれる',
                  },
                  {
                    icon: FaBriefcase,
                    title: '転職保証',
                    desc: '転職できなかったら全額返金※条件あり',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-600 text-black text-sm font-bold px-4 py-2 rounded-full">
                    期間限定！
                  </div>
                  <h3 className="text-2xl font-bold mb-4">今だけの特典 🎁</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      <span>MacBook Pro レンタル無料</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      <span>AWS・GitHub有料プラン無料</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      <span>卒業後も永久サポート</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      <span>先輩エンジニアとの1on1</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
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
                何を
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  学ぶの？
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                最新技術をガンガン触って、実務レベルまで引き上げる
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                className="space-y-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  {
                    week: 'Week 1-4',
                    title: 'フロントエンド基礎',
                    tech: 'HTML/CSS/JavaScript + React/Next.js',
                    project: 'ポートフォリオサイト作成',
                  },
                  {
                    week: 'Week 5-8',
                    title: 'バックエンド開発',
                    tech: 'Node.js + Express + MongoDB/PostgreSQL',
                    project: 'REST API & GraphQL実装',
                  },
                  {
                    week: 'Week 9-10',
                    title: 'インフラ・DevOps',
                    tech: 'Docker + AWS + GitHub Actions',
                    project: '自動デプロイ環境構築',
                  },
                  {
                    week: 'Week 11-12',
                    title: 'AI連携 & 実務体験',
                    tech: 'OpenAI API + Vercel + オフショア開発',
                    project: 'AIチャットボット開発',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full">
                            {item.week}
                          </span>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-2">{item.tech}</p>
                        <p className="text-sm text-purple-400">💻 {item.project}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FaCode className="text-3xl text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
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
                先輩たちの
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  サクセスストーリー
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Takumi (23歳)',
                  before: 'フリーター',
                  after: 'フロントエンドエンジニア @ スタートアップ',
                  salary: '年収450万',
                  comment: 'まじで人生変わった。コード書くの楽しすぎて毎日が充実してる！',
                  avatar: 'T',
                },
                {
                  name: 'Yui (26歳)',
                  before: '事務職',
                  after: 'フルスタックエンジニア @ メガベンチャー',
                  salary: '年収600万',
                  comment: '女性エンジニアの仲間もたくさんできて、キャリアの選択肢が広がった！',
                  avatar: 'Y',
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

                    <p className="text-gray-300 italic">&quot;{story.comment}&quot;</p>

                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
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
                料金
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  プラン
                </span>
              </h2>
              <p className="text-xl text-gray-400">自分のペースに合わせて選べる3つのプラン</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                    } hover:border-purple-500 transition-all duration-300`}
                  >
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {plan.price}
                    </p>
                    <p className="text-gray-400 text-sm mb-6">{plan.duration}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-600 text-black hover:shadow-lg hover:shadow-orange-500/25'
                          : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }`}
                    >
                      このプランで始める
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                よくある
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  質問
                </span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: '完全未経験でも大丈夫？',
                  a: 'もちろん！受講生の8割が未経験スタート。基礎の基礎から丁寧に教えます。',
                },
                {
                  q: '仕事しながらでも続けられる？',
                  a: '週15-20時間の学習時間が目安。録画授業もあるので、自分のペースでOK！',
                },
                {
                  q: '他のスクールとの違いは？',
                  a: '実際のオフショア開発を体験できるのはうちだけ。グローバルで活躍できるエンジニアになれます。',
                },
                {
                  q: '転職サポートの内容は？',
                  a: '履歴書添削、ポートフォリオ作成、面接練習、企業紹介まで完全サポート。内定まで伴走します。',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300"
                >
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-purple-400">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 pl-6">
                    <span className="text-purple-400">A.</span> {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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

              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-black px-10 py-5 rounded-full text-lg hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                無料カウンセリングを予約する
                <FaRocket />
              </motion.a>

              <p className="mt-6 text-gray-400">
                ※ 無理な勧誘は一切しません。安心してご相談ください。
              </p>

              {/* Social links */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaTwitter className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaDiscord className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
