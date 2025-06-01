import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaGlobe,
  FaLanguage,
  FaUsers,
  FaVideo,
  FaHandshake,
  FaClock,
  FaArrowRight,
  FaMapMarkerAlt,
  FaChartLine,
  FaMedal,
} from 'react-icons/fa';

const GlobalExperiencePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const countries = [
    { name: 'ベトナム', flag: '🇻🇳', timezone: 'UTC+7', developers: 15 },
    { name: 'インド', flag: '🇮🇳', timezone: 'UTC+5:30', developers: 10 },
    { name: 'フィリピン', flag: '🇵🇭', timezone: 'UTC+8', developers: 8 },
    { name: 'ウクライナ', flag: '🇺🇦', timezone: 'UTC+2', developers: 5 },
    { name: 'ブラジル', flag: '🇧🇷', timezone: 'UTC-3', developers: 3 },
    { name: '日本', flag: '🇯🇵', timezone: 'UTC+9', developers: 20 },
  ];

  const globalSkills = [
    {
      icon: FaLanguage,
      title: 'ビジネス英語力',
      description: 'エンジニアリングに特化した実践的な英語コミュニケーション能力を習得',
    },
    {
      icon: FaClock,
      title: 'タイムゾーン管理',
      description: '複数のタイムゾーンをまたぐチームでの効率的な業務管理スキル',
    },
    {
      icon: FaHandshake,
      title: '異文化理解',
      description: '多様な文化背景を持つメンバーとの円滑なコラボレーション',
    },
    {
      icon: FaVideo,
      title: 'リモートワーク力',
      description: 'オンラインツールを駆使した効果的なリモートワークスキル',
    },
  ];

  const workflowSteps = [
    {
      title: 'キックオフミーティング',
      description: '各国のメンバーとプロジェクトの目標・スケジュールを共有',
      tools: ['Zoom', 'Slack', 'Notion'],
    },
    {
      title: 'タスク分担',
      description: '時差を考慮した効率的なタスク割り振りと進捗管理',
      tools: ['Jira', 'GitHub Projects', 'Asana'],
    },
    {
      title: 'デイリースクラム',
      description: '非同期コミュニケーションを活用した進捗共有',
      tools: ['Slack', 'Loom', 'Discord'],
    },
    {
      title: 'コードレビュー',
      description: '英語でのコードレビューとフィードバック',
      tools: ['GitHub', 'GitLab', 'Bitbucket'],
    },
  ];

  const testimonials = [
    {
      name: '佐藤 健太',
      age: 25,
      previousJob: '営業職',
      message:
        '最初は英語が苦手でしたが、実際のプロジェクトで使うことで自然と身につきました。今では海外のエンジニアと対等に議論できます。',
      currentPosition: 'フルスタックエンジニア',
      company: '外資系IT企業',
    },
    {
      name: '鈴木 美咲',
      age: 27,
      previousJob: '事務職',
      message:
        'グローバルプロジェクトでの経験が評価され、転職時に年収が200万円アップしました。世界中に仲間ができたのも財産です。',
      currentPosition: 'フロントエンドエンジニア',
      company: 'グローバルスタートアップ',
    },
  ];

  return (
    <>
      <Head>
        <title>グローバルな開発経験 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowのグローバル開発プログラム。世界中のエンジニアとチーム開発を経験し、国際的に活躍できるスキルを身につけます。"
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
              href="/contact?plan=premium"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              無料カウンセリング
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
                <FaGlobe className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                グローバルな
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  開発経験
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                世界中のエンジニアとチーム開発
                <br />
                国境を越えて活躍できるスキルを身につける
              </p>
            </motion.div>
          </div>
        </section>

        {/* World Map Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">6カ国のエンジニアと協働</h2>
              <p className="text-gray-400">リアルな国際プロジェクトを体験</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {countries.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors"
                >
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h3 className="text-lg font-bold mb-1">{country.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{country.timezone}</p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <FaUsers className="text-purple-400" />
                    <span>{country.developers}名のエンジニア</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Skills */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">身につく国際スキル</h2>
              <p className="text-gray-400">グローバル企業で求められる実践的なスキルセット</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {globalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <skill.icon className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-300">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">グローバル開発の流れ</h2>
              <p className="text-gray-400">実際の国際プロジェクトと同じワークフロー</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-xs bg-gray-700 px-3 py-1 rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">グローバル経験のメリット</h2>
              <p className="text-gray-400">世界で通用するエンジニアになる</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-800/50"
              >
                <FaChartLine className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">市場価値の向上</h3>
                <p className="text-gray-300">グローバル経験を持つエンジニアは年収が平均30%高い</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-800/50"
              >
                <FaMapMarkerAlt className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">働く場所の自由</h3>
                <p className="text-gray-300">リモートワークで世界中どこからでも仕事ができる</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-pink-900/30 to-orange-900/30 rounded-2xl p-8 border border-pink-800/50"
              >
                <FaMedal className="text-4xl text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">キャリアの可能性</h3>
                <p className="text-gray-300">外資系企業や海外就職の道が大きく広がる</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">受講生の声</h2>
              <p className="text-gray-400">グローバル経験を積んだ先輩たちの体験談</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold">
                        {testimonial.name} ({testimonial.age}歳)
                      </h3>
                      <p className="text-sm text-gray-400">前職: {testimonial.previousJob}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">&quot;{testimonial.message}&quot;</p>
                  <div className="text-sm">
                    <p className="text-purple-400">現在: {testimonial.currentPosition}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                世界で活躍するエンジニアになる
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                グローバルな開発経験で、国境を越えたキャリアを実現しよう
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?plan=premium"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                >
                  無料カウンセリングを予約
                  <FaArrowRight />
                </Link>
                <Link
                  href="/curriculum"
                  className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                >
                  カリキュラムを見る
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GlobalExperiencePage;
