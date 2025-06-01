import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaLaptopCode,
  FaGithub,
  FaDocker,
  FaAws,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaArrowRight,
  FaUsers,
  FaProjectDiagram,
  FaShieldAlt,
  FaBolt,
} from 'react-icons/fa';

const PracticalDevelopmentPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const technologies = [
    { icon: FaReact, name: 'React', color: 'text-blue-400' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-400' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-400' },
    { icon: FaGithub, name: 'GitHub', color: 'text-gray-400' },
    { icon: FaDatabase, name: 'Database', color: 'text-purple-400' },
  ];

  const projects = [
    {
      title: 'ECサイト構築プロジェクト',
      duration: '4週間',
      description: 'フルスタックでECサイトを構築。決済機能、在庫管理、管理画面まで実装',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      teamSize: '4-5人',
    },
    {
      title: 'リアルタイムチャットアプリ',
      duration: '2週間',
      description: 'WebSocketを使用したリアルタイムチャット。画像送信、既読機能付き',
      skills: ['Socket.io', 'Express', 'MongoDB', 'AWS S3'],
      teamSize: '3-4人',
    },
    {
      title: 'タスク管理システム',
      duration: '3週間',
      description: 'ドラッグ&ドロップ対応のカンバンボード。チーム機能、通知機能搭載',
      skills: ['Next.js', 'Prisma', 'GraphQL', 'TypeScript'],
      teamSize: '4-5人',
    },
  ];

  const benefits = [
    {
      icon: FaProjectDiagram,
      title: '実務と同じ開発フロー',
      description: '要件定義から設計、実装、テスト、デプロイまで一連の流れを経験',
    },
    {
      icon: FaUsers,
      title: 'チーム開発の経験',
      description: 'Git-flowやPull Request、コードレビューなど実務で必須のスキルを習得',
    },
    {
      icon: FaShieldAlt,
      title: 'セキュリティ意識',
      description: '脆弱性対策やセキュアコーディングの実践的な知識を獲得',
    },
    {
      icon: FaBolt,
      title: 'パフォーマンス最適化',
      description: 'Webパフォーマンスの計測と改善手法を実践的に学習',
    },
  ];

  return (
    <>
      <Head>
        <title>実践的な開発経験 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの実践的な開発経験プログラム。現場と同じ環境でチーム開発を経験し、即戦力エンジニアを目指します。"
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6">
                <FaLaptopCode className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                実践的な
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  開発経験
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                現場と同じ環境、同じツール、同じフローで
                <br />
                本物のエンジニアスキルを身につける
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">使用する技術スタック</h2>
              <p className="text-gray-400">現場で求められる最新技術を実践的に習得</p>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-6xl ${tech.color} mb-2`}>
                    <tech.icon />
                  </div>
                  <p className="text-sm font-semibold">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">実際に開発するプロジェクト例</h2>
              <p className="text-gray-400">
                段階的に難易度を上げながら、実務レベルのアプリケーションを構築
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">使用技術:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-gray-700 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-400">
                    <FaUsers className="mr-2" />
                    チーム規模: {project.teamSize}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">実践開発で身につくスキル</h2>
              <p className="text-gray-400">単なる知識ではなく、現場で活きる実践力</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <benefit.icon className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Flow */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">開発の流れ</h2>
              <p className="text-gray-400">実務と同じワークフローを体験</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: '要件定義',
                  description: 'プロダクトオーナーとの要件確認、仕様書の作成',
                },
                { step: '02', title: '設計', description: 'アーキテクチャ設計、DB設計、API設計' },
                {
                  step: '03',
                  title: '実装',
                  description: 'フロントエンド・バックエンドの実装、単体テスト',
                },
                {
                  step: '04',
                  title: 'レビュー',
                  description: 'コードレビュー、フィードバックの反映',
                },
                { step: '05', title: 'テスト', description: '結合テスト、E2Eテスト、バグ修正' },
                {
                  step: '06',
                  title: 'デプロイ',
                  description: 'CI/CDパイプライン、本番環境へのデプロイ',
                },
              ].map((flow, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 mb-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-xl">
                      {flow.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{flow.title}</h3>
                    <p className="text-gray-400">{flow.description}</p>
                  </div>
                  {index < 5 && <FaArrowRight className="text-gray-600 hidden md:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                現場で活躍できるエンジニアになる
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                実践的な開発経験で、即戦力として活躍できるスキルを身につけよう
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

export default PracticalDevelopmentPage;
