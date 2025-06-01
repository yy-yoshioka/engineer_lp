import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaCheckCircle,
  FaRocket,
  FaCode,
  FaGlobeAmericas,
  FaCalendarAlt,
  FaArrowRight,
  FaLightbulb,
  FaUsers,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';

const CurriculumPage = () => {
  const [activeMonth, setActiveMonth] = useState(1);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const technologies = [
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaJsSquare, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },
    { icon: FaReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiExpress, name: 'Express', color: 'text-gray-400' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-400' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-600' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-400' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-500' },
    { icon: FaPython, name: 'Python', color: 'text-blue-400' },
  ];

  const curriculum = [
    {
      month: 1,
      title: '基礎固め & フロントエンド',
      subtitle: 'Web開発の基礎とモダンフロントエンド',
      weeks: [
        {
          week: 1,
          title: 'Web開発基礎',
          topics: ['HTML/CSS基礎', 'レスポンシブデザイン', 'Git/GitHub入門', 'JavaScript基礎'],
        },
        {
          week: 2,
          title: 'JavaScript応用',
          topics: ['ES6+の新機能', '非同期処理', 'DOM操作', 'イベント処理'],
        },
        {
          week: 3,
          title: 'React入門',
          topics: ['コンポーネント設計', 'State/Props', 'Hooks基礎', 'ルーティング'],
        },
        {
          week: 4,
          title: 'React実践',
          topics: ['状態管理', 'API連携', 'パフォーマンス最適化', 'ミニプロジェクト'],
        },
      ],
      project: 'ポートフォリオサイト制作',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Git'],
    },
    {
      month: 2,
      title: 'バックエンド & データベース',
      subtitle: 'サーバーサイド開発とデータ管理',
      weeks: [
        {
          week: 5,
          title: 'Node.js基礎',
          topics: ['Node.js環境構築', 'Express.js', 'RESTful API', 'ミドルウェア'],
        },
        {
          week: 6,
          title: 'データベース',
          topics: ['SQL基礎', 'MongoDB', 'データモデリング', 'ORM/ODM'],
        },
        {
          week: 7,
          title: '認証・セキュリティ',
          topics: ['JWT認証', 'OAuth', 'セキュリティ対策', 'HTTPS/CORS'],
        },
        {
          week: 8,
          title: 'TypeScript & テスト',
          topics: ['TypeScript基礎', '型定義', 'ユニットテスト', 'E2Eテスト'],
        },
      ],
      project: 'フルスタックWebアプリ開発',
      skills: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    },
    {
      month: 3,
      title: '実践開発 & デプロイ',
      subtitle: 'チーム開発とプロダクション環境',
      weeks: [
        {
          week: 9,
          title: 'モダン開発環境',
          topics: ['Docker入門', 'CI/CD', 'Next.js', 'マイクロサービス'],
        },
        {
          week: 10,
          title: 'クラウド & DevOps',
          topics: ['AWS基礎', 'デプロイ自動化', '監視・ログ', 'スケーリング'],
        },
        {
          week: 11,
          title: 'チーム開発実践',
          topics: [
            'アジャイル開発',
            'コードレビュー',
            'ペアプログラミング',
            '英語コミュニケーション',
          ],
        },
        {
          week: 12,
          title: '卒業制作',
          topics: ['要件定義', '設計・実装', 'テスト・デプロイ', 'プレゼンテーション'],
        },
      ],
      project: '海外チームとの共同開発プロジェクト',
      skills: ['Docker', 'AWS', 'Next.js', 'チーム開発'],
    },
  ];

  return (
    <>
      <Head>
        <title>カリキュラム詳細 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの3ヶ月集中カリキュラム。基礎から実践まで、即戦力エンジニアになるための全て。"
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
            >
              無料相談
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-purple-900/30 backdrop-blur px-4 py-2 rounded-full border border-purple-500/30 mb-6">
                <FaCalendarAlt className="text-purple-400" />
                <span className="text-sm">3ヶ月集中プログラム</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                実践的
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  カリキュラム
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                基礎から始めて、3ヶ月後には海外エンジニアと
                <br />
                共同開発できるレベルまで成長します。
              </p>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { icon: FaCode, label: '300時間+', desc: '学習時間' },
                  { icon: FaRocket, label: '10個+', desc: '制作物' },
                  { icon: FaUsers, label: '実践的', desc: 'チーム開発' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-2">
                      <stat.icon className="text-xl" />
                    </div>
                    <div className="font-bold">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Technologies */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                習得する
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  技術スタック
                </span>
              </h2>
              <p className="text-gray-400">現場で求められる最新技術を網羅的に学習</p>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                    <tech.icon className={`text-3xl mb-2 mx-auto ${tech.color}`} />
                    <p className="text-xs text-gray-400">{tech.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                3ヶ月の
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  学習ロードマップ
                </span>
              </h2>
            </motion.div>

            {/* Month Selector */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-800 rounded-full p-1 flex gap-2">
                {[1, 2, 3].map((month) => (
                  <button
                    key={month}
                    onClick={() => setActiveMonth(month)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      activeMonth === month
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    {month}ヶ月目
                  </button>
                ))}
              </div>
            </div>

            {/* Month Details */}
            {curriculum.map((monthData, monthIndex) => (
              <motion.div
                key={monthIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: activeMonth === monthData.month ? 1 : 0,
                  y: activeMonth === monthData.month ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
                className={`${activeMonth === monthData.month ? 'block' : 'hidden'}`}
              >
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{monthData.title}</h3>
                    <p className="text-gray-400">{monthData.subtitle}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {monthData.weeks.map((week, weekIndex) => (
                      <motion.div
                        key={weekIndex}
                        initial={{ opacity: 0, x: weekIndex % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: weekIndex * 0.1 }}
                        className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold">
                            W{week.week}
                          </div>
                          <h4 className="text-xl font-semibold">{week.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2 text-gray-300">
                              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Month Project */}
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/30">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaRocket className="text-yellow-400" />
                      {monthData.month}ヶ月目の成果物
                    </h4>
                    <p className="text-2xl font-bold mb-4">{monthData.project}</p>
                    <div className="flex flex-wrap gap-2">
                      {monthData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Learning Features */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                OffshoreFlowの
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  学習スタイル
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: FaCode,
                  title: 'ハンズオン中心',
                  desc: '理論20%、実践80%。手を動かしながら学ぶから身につく。',
                  features: ['毎日コーディング', '即フィードバック', '実践的な課題'],
                },
                {
                  icon: FaGlobeAmericas,
                  title: '英語×プログラミング',
                  desc: '海外エンジニアとの共同開発で、技術と英語を同時習得。',
                  features: ['英語ドキュメント', 'グローバルチーム', '実践的な英会話'],
                },
                {
                  icon: FaUsers,
                  title: '少人数制指導',
                  desc: '最大10名の少人数制。一人ひとりに合わせた手厚いサポート。',
                  features: ['個別メンタリング', 'ペアプログラミング', '24/7サポート'],
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6">
                    <feature.icon className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <FaCheckCircle className="text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                1日の
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  学習スケジュール例
                </span>
              </h2>
              <p className="text-gray-400">働きながらでも続けられる効率的なスケジュール</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="space-y-4">
                  {[
                    {
                      time: '6:00-7:00',
                      activity: '朝活学習',
                      desc: '集中力の高い朝に理論学習',
                      type: 'study',
                    },
                    {
                      time: '12:00-13:00',
                      activity: 'ランチタイム学習',
                      desc: '動画講義やコードレビュー',
                      type: 'review',
                    },
                    {
                      time: '19:00-21:00',
                      activity: 'メイン学習時間',
                      desc: 'ハンズオン実習・課題制作',
                      type: 'practice',
                    },
                    {
                      time: '21:00-22:00',
                      activity: 'コミュニティ活動',
                      desc: 'Discord質問・もくもく会',
                      type: 'community',
                    },
                  ].map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl"
                    >
                      <div className="text-lg font-bold text-purple-400 w-32">{schedule.time}</div>
                      <div className="flex-grow">
                        <h4 className="font-semibold mb-1">{schedule.activity}</h4>
                        <p className="text-sm text-gray-400">{schedule.desc}</p>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          schedule.type === 'study'
                            ? 'bg-blue-500'
                            : schedule.type === 'review'
                              ? 'bg-yellow-500'
                              : schedule.type === 'practice'
                                ? 'bg-green-500'
                                : 'bg-purple-500'
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center text-gray-400">
                  <p>週15-20時間の学習時間で、着実にスキルアップ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-orange-900/30" />

          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                実践的なカリキュラムで
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  即戦力エンジニア
                </span>
                になる
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                詳しいカリキュラムや学習方法について、
                <br />
                無料カウンセリングでご説明します。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
                >
                  カリキュラムについて相談する
                  <FaArrowRight />
                </motion.a>
                <motion.a
                  href="/schedule-examples"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <FaCalendarAlt />
                  詳しいスケジュール例
                </motion.a>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-400">
                  <FaLightbulb className="inline mr-2 text-yellow-400" />
                  未経験の方でも安心。基礎から丁寧にサポートします。
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CurriculumPage;
