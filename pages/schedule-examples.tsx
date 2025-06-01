import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaClock,
  FaSun,
  FaBriefcase,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaChartLine,
  FaRocket,
  FaCoffee,
  FaUsers,
  FaLaptopCode,
  FaBook,
} from 'react-icons/fa';

const ScheduleExamplesPage = () => {
  const [selectedPattern, setSelectedPattern] = useState('fulltime');

  const patterns = {
    fulltime: {
      name: 'フルタイム学習',
      description: '1日8時間以上学習できる方',
      duration: '3ヶ月で転職',
      icon: FaRocket,
      schedule: [
        { time: '9:00-10:00', activity: '朝の学習準備・前日の復習', icon: FaCoffee, type: 'prep' },
        { time: '10:00-12:00', activity: '講義動画視聴・基礎学習', icon: FaBook, type: 'study' },
        { time: '12:00-13:00', activity: '昼休憩', icon: FaCoffee, type: 'break' },
        {
          time: '13:00-15:00',
          activity: 'ハンズオン・コーディング演習',
          icon: FaLaptopCode,
          type: 'coding',
        },
        {
          time: '15:00-17:00',
          activity: 'チーム開発・プロジェクト作業',
          icon: FaUsers,
          type: 'team',
        },
        { time: '17:00-18:00', activity: '夕休憩', icon: FaCoffee, type: 'break' },
        {
          time: '18:00-20:00',
          activity: '個人開発・ポートフォリオ作成',
          icon: FaLaptopCode,
          type: 'coding',
        },
        {
          time: '20:00-21:00',
          activity: '1日の振り返り・質問対応',
          icon: FaCheckCircle,
          type: 'review',
        },
      ],
    },
    working: {
      name: '働きながら学習',
      description: '仕事と両立しながら学習する方',
      duration: '6ヶ月で転職',
      icon: FaBriefcase,
      schedule: [
        { time: '6:00-7:00', activity: '朝活学習・基礎講義', icon: FaSun, type: 'study' },
        { time: '7:00-9:00', activity: '通勤・朝の準備', icon: FaCoffee, type: 'break' },
        { time: '9:00-18:00', activity: '仕事', icon: FaBriefcase, type: 'work' },
        { time: '18:00-19:00', activity: '夕食・休憩', icon: FaCoffee, type: 'break' },
        {
          time: '19:00-21:00',
          activity: 'コーディング演習・実践学習',
          icon: FaLaptopCode,
          type: 'coding',
        },
        {
          time: '21:00-22:00',
          activity: 'オンライン勉強会・質問対応',
          icon: FaUsers,
          type: 'team',
        },
        { time: '22:00-23:00', activity: '復習・翌日の準備', icon: FaBook, type: 'review' },
      ],
    },
    student: {
      name: '学生の学習',
      description: '大学と両立しながら学習する方',
      duration: '4ヶ月で内定',
      icon: FaGraduationCap,
      schedule: [
        { time: '8:00-12:00', activity: '大学の授業', icon: FaGraduationCap, type: 'work' },
        { time: '12:00-13:00', activity: '昼休憩', icon: FaCoffee, type: 'break' },
        { time: '13:00-15:00', activity: '講義動画視聴・基礎学習', icon: FaBook, type: 'study' },
        { time: '15:00-17:00', activity: 'プログラミング演習', icon: FaLaptopCode, type: 'coding' },
        { time: '17:00-18:00', activity: '休憩・夕食', icon: FaCoffee, type: 'break' },
        {
          time: '18:00-20:00',
          activity: 'チーム開発・グループワーク',
          icon: FaUsers,
          type: 'team',
        },
        {
          time: '20:00-22:00',
          activity: '個人プロジェクト・ポートフォリオ',
          icon: FaLaptopCode,
          type: 'coding',
        },
        { time: '22:00-23:00', activity: '復習・質問まとめ', icon: FaCheckCircle, type: 'review' },
      ],
    },
  };

  const weeklyMilestones = [
    {
      week: '1-2週目',
      title: 'プログラミング基礎',
      tasks: ['HTML/CSS基礎', 'JavaScript基礎', 'Git/GitHub入門'],
    },
    {
      week: '3-4週目',
      title: 'フロントエンド基礎',
      tasks: ['React基礎', 'コンポーネント設計', '状態管理'],
    },
    {
      week: '5-6週目',
      title: 'バックエンド基礎',
      tasks: ['Node.js/Express', 'データベース基礎', 'API設計'],
    },
    {
      week: '7-8週目',
      title: '実践プロジェクト',
      tasks: ['チーム開発開始', 'プロジェクト設計', '実装・テスト'],
    },
    {
      week: '9-10週目',
      title: 'ポートフォリオ作成',
      tasks: ['個人プロジェクト', 'デプロイ', 'ドキュメント作成'],
    },
    { week: '11-12週目', title: '転職活動', tasks: ['履歴書作成', '面接対策', '企業研究'] },
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'study':
        return 'from-blue-600 to-cyan-600';
      case 'coding':
        return 'from-purple-600 to-pink-600';
      case 'team':
        return 'from-green-600 to-emerald-600';
      case 'review':
        return 'from-orange-600 to-yellow-600';
      case 'work':
        return 'from-gray-600 to-gray-700';
      case 'break':
        return 'from-gray-700 to-gray-800';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <>
      <Head>
        <title>学習スケジュール例 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの学習スケジュール例。フルタイム、働きながら、学生など、様々なライフスタイルに合わせた学習プランをご紹介。"
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
                <FaCalendarAlt className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                学習
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  スケジュール例
                </span>
              </h1>
              <p className="text-xl text-gray-300">あなたのライフスタイルに合わせた学習プラン</p>
            </motion.div>
          </div>
        </section>

        {/* Pattern Selection */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {Object.entries(patterns).map(([key, pattern]) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPattern(key)}
                  className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                    selectedPattern === key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <pattern.icon className="inline mr-2" />
                  {pattern.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Schedule */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              key={selectedPattern}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto"
            >
              {/* Pattern Info */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  {patterns[selectedPattern as keyof typeof patterns].name}
                </h2>
                <p className="text-gray-400 mb-4">
                  {patterns[selectedPattern as keyof typeof patterns].description}
                </p>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm font-bold">
                  <FaClock />
                  {patterns[selectedPattern as keyof typeof patterns].duration}
                </div>
              </div>

              {/* Daily Schedule */}
              <div className="bg-gray-900/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">1日のスケジュール例</h3>
                <div className="space-y-4">
                  {patterns[selectedPattern as keyof typeof patterns].schedule.map(
                    (item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="flex-shrink-0 w-24 text-right">
                          <span className="text-sm text-gray-400">{item.time}</span>
                        </div>
                        <div
                          className={`flex-1 bg-gradient-to-r ${getActivityColor(item.type)} p-4 rounded-xl flex items-center gap-3`}
                        >
                          <item.icon className="text-xl flex-shrink-0" />
                          <span className="font-semibold">{item.activity}</span>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Weekly Milestones */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">12週間の学習マイルストーン</h2>
              <p className="text-gray-400">段階的にスキルを習得していきます</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {weeklyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-sm text-purple-400">{milestone.week}</span>
                      <h3 className="text-lg font-bold">{milestone.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {milestone.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-300">
                        <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">効率的な学習のコツ</h2>
              <p className="text-gray-400">学習効果を最大化するためのアドバイス</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: '毎日コードを書く',
                  description: '短時間でも毎日コードを書くことで、プログラミング思考が身につきます',
                  icon: FaLaptopCode,
                },
                {
                  title: 'アウトプット重視',
                  description: '学んだことをすぐに実践し、アウトプットすることで定着率が向上します',
                  icon: FaChartLine,
                },
                {
                  title: '仲間と学ぶ',
                  description:
                    '同期や先輩エンジニアと交流することで、モチベーション維持につながります',
                  icon: FaUsers,
                },
                {
                  title: '定期的な振り返り',
                  description: '週単位で学習内容を振り返り、理解度を確認することが重要です',
                  icon: FaCheckCircle,
                },
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                >
                  <tip.icon className="text-4xl text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-gray-300">{tip.description}</p>
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
                あなたに合った学習プランを見つけよう
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                無料カウンセリングで、最適な学習スケジュールをご提案します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                >
                  無料カウンセリングを予約
                  <FaArrowRight />
                </Link>
                <Link
                  href="/pricing-consultation"
                  className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                >
                  プラン診断を受ける
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ScheduleExamplesPage;
