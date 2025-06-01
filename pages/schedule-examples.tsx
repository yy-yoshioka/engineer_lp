import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaClock,
  FaSun,
  FaBriefcase,
  FaGraduationCap,
  FaHome,
  FaCheckCircle,
  FaArrowRight,
  FaCalendarAlt,
  FaChartLine,
  FaLightbulb,
  FaRocket,
  FaCoffee,
  FaUsers,
} from 'react-icons/fa';

interface Schedule {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  totalHours: string;
  difficulty: number;
  timeline: {
    time: string;
    activity: string;
    duration: string;
    type: 'study' | 'practice' | 'review' | 'community';
  }[];
  weeklyHours: number;
  pros: string[];
  cons: string[];
  bestFor: string;
}

const ScheduleExamplesPage = () => {
  const [selectedSchedule, setSelectedSchedule] = useState('working');

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const schedules: Record<string, Schedule> = {
    working: {
      id: 'working',
      title: '働きながら学習プラン',
      subtitle: '仕事と両立しながら着実にスキルアップ',
      icon: FaBriefcase,
      totalHours: '週15-20時間',
      difficulty: 3,
      timeline: [
        { time: '6:00-7:00', activity: '朝活学習', duration: '1時間', type: 'study' },
        { time: '7:00-9:00', activity: '通勤・準備', duration: '2時間', type: 'review' },
        { time: '9:00-18:00', activity: '仕事', duration: '9時間', type: 'practice' },
        { time: '12:00-13:00', activity: 'ランチタイム学習', duration: '30分', type: 'review' },
        { time: '19:00-21:00', activity: 'メイン学習時間', duration: '2時間', type: 'practice' },
        { time: '21:00-22:00', activity: 'コミュニティ活動', duration: '1時間', type: 'community' },
      ],
      weeklyHours: 20,
      pros: [
        '収入を維持しながら学習可能',
        '実務経験を活かせる',
        '転職リスクが低い',
        '学習習慣が身につく',
      ],
      cons: ['学習時間の確保が大変', '体力的にきつい時がある', '進捗がゆっくり'],
      bestFor: '現職を続けながら、着実にスキルアップしたい方',
    },
    student: {
      id: 'student',
      title: '学生向け集中プラン',
      subtitle: '時間を最大限活用して最速成長',
      icon: FaGraduationCap,
      totalHours: '週30-40時間',
      difficulty: 2,
      timeline: [
        { time: '9:00-12:00', activity: '午前の集中学習', duration: '3時間', type: 'study' },
        { time: '12:00-13:00', activity: 'ランチ休憩', duration: '1時間', type: 'review' },
        { time: '13:00-16:00', activity: '午後の実践学習', duration: '3時間', type: 'practice' },
        { time: '16:00-17:00', activity: '休憩・運動', duration: '1時間', type: 'review' },
        { time: '17:00-19:00', activity: 'プロジェクト開発', duration: '2時間', type: 'practice' },
        {
          time: '20:00-22:00',
          activity: 'コミュニティ・復習',
          duration: '2時間',
          type: 'community',
        },
      ],
      weeklyHours: 35,
      pros: [
        'まとまった時間で集中学習',
        '最速でスキル習得可能',
        '同期と切磋琢磨できる',
        '新卒エンジニアとして就職可能',
      ],
      cons: ['アルバイト収入が減る', '学業との両立が必要', '長時間学習で疲れやすい'],
      bestFor: '時間に余裕がある学生・フリーターの方',
    },
    freelance: {
      id: 'freelance',
      title: 'フリーランス移行プラン',
      subtitle: '副業から始めて独立を目指す',
      icon: FaHome,
      totalHours: '週25-30時間',
      difficulty: 4,
      timeline: [
        { time: '5:00-7:00', activity: '早朝学習', duration: '2時間', type: 'study' },
        { time: '9:00-12:00', activity: '既存案件作業', duration: '3時間', type: 'practice' },
        { time: '13:00-15:00', activity: '新技術の学習', duration: '2時間', type: 'study' },
        { time: '15:00-18:00', activity: '実践プロジェクト', duration: '3時間', type: 'practice' },
        {
          time: '19:00-20:00',
          activity: '営業・ネットワーキング',
          duration: '1時間',
          type: 'community',
        },
        {
          time: '20:00-21:00',
          activity: 'ポートフォリオ作成',
          duration: '1時間',
          type: 'practice',
        },
      ],
      weeklyHours: 28,
      pros: [
        '即収入につながるスキル習得',
        '自分のペースで学習可能',
        '実案件で経験を積める',
        '将来的に独立可能',
      ],
      cons: ['自己管理能力が必要', '収入が不安定になる可能性', '営業活動も必要'],
      bestFor: 'フリーランスエンジニアを目指す方',
    },
  };

  const currentSchedule = schedules[selectedSchedule];

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'study':
        return 'bg-blue-500';
      case 'practice':
        return 'bg-green-500';
      case 'review':
        return 'bg-yellow-500';
      case 'community':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <>
      <Head>
        <title>学習スケジュール例 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの学習スケジュール例。働きながら、学生、フリーランス向けなど、ライフスタイルに合わせた学習プラン。"
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
                <FaClock className="text-purple-400" />
                <span className="text-sm">ライフスタイルに合わせた学習</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                学習
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  スケジュール
                </span>
                例
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                あなたのライフスタイルに合わせた
                <br />
                最適な学習プランを見つけよう
              </p>
            </motion.div>
          </div>
        </section>

        {/* Schedule Selector */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">あなたはどのタイプ？</h2>
              <p className="text-gray-400">該当するライフスタイルを選択してください</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Object.values(schedules).map((schedule, index) => (
                <motion.button
                  key={schedule.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedSchedule(schedule.id)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    selectedSchedule === schedule.id
                      ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500'
                      : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                        selectedSchedule === schedule.id
                          ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                          : 'bg-gray-700'
                      }`}
                    >
                      <schedule.icon className="text-xl" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg mb-1">{schedule.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{schedule.subtitle}</p>
                      <p className="text-sm font-semibold text-purple-400">{schedule.totalHours}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                key={currentSchedule.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Schedule Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentSchedule.title}</h2>
                  <p className="text-xl text-gray-400">{currentSchedule.subtitle}</p>
                </div>

                {/* Daily Timeline */}
                <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 mb-12">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaCalendarAlt className="text-purple-400" />
                    1日のスケジュール例
                  </h3>

                  <div className="space-y-4">
                    {currentSchedule.timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl"
                      >
                        <div className="text-lg font-bold text-purple-400 w-28 flex-shrink-0">
                          {item.time}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3">
                            <h4 className="font-semibold">{item.activity}</h4>
                            <span className="text-sm text-gray-400">({item.duration})</span>
                          </div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${getActivityColor(item.type)}`} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-gray-400">理論学習</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-gray-400">実践・開発</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="text-gray-400">復習・休憩</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-gray-400">コミュニティ</span>
                    </div>
                  </div>
                </div>

                {/* Weekly Summary */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center"
                  >
                    <FaClock className="text-3xl text-purple-400 mb-3 mx-auto" />
                    <h3 className="text-3xl font-bold mb-1">{currentSchedule.weeklyHours}時間</h3>
                    <p className="text-gray-400">週間学習時間</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center"
                  >
                    <FaChartLine className="text-3xl text-green-400 mb-3 mx-auto" />
                    <h3 className="text-3xl font-bold mb-1">3ヶ月</h3>
                    <p className="text-gray-400">転職までの期間</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center"
                  >
                    <FaLightbulb className="text-3xl text-yellow-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-bold mb-1">難易度</h3>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-6 rounded ${
                            i < currentSchedule.difficulty ? 'bg-yellow-400' : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Pros */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      メリット
                    </h3>
                    <ul className="space-y-3">
                      {currentSchedule.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Cons */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-orange-500/30"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaLightbulb className="text-orange-400" />
                      注意点
                    </h3>
                    <ul className="space-y-3">
                      {currentSchedule.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaLightbulb className="text-orange-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Best For */}
                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/30 text-center">
                  <h3 className="text-2xl font-bold mb-4">こんな方におすすめ</h3>
                  <p className="text-xl text-gray-300">{currentSchedule.bestFor}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                効率的に学習する
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  ポイント
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: FaSun,
                  title: '朝活のススメ',
                  desc: '朝の1時間は夜の3時間に匹敵。集中力が高い朝に難しい内容を学習しよう。',
                  tips: ['毎日同じ時間に起床', 'コーヒーで覚醒', '前日に準備を完了'],
                },
                {
                  icon: FaCoffee,
                  title: 'スキマ時間活用',
                  desc: '通勤時間やランチタイムも有効活用。動画講義や記事を読んで知識をインプット。',
                  tips: ['スマホで学習環境構築', '音声教材を活用', '5分でも積み重ね'],
                },
                {
                  icon: FaUsers,
                  title: 'コミュニティ参加',
                  desc: '一人で悩まない。Discordで質問したり、同期と励まし合って継続力UP。',
                  tips: ['毎日ログイン習慣', '積極的に質問', 'アウトプットを共有'],
                },
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-3xl p-8 border border-gray-700"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl mb-6">
                    <tip.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                  <p className="text-gray-400 mb-6">{tip.desc}</p>
                  <ul className="space-y-2">
                    {tip.tips.map((item, i) => (
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
                あなたに最適な
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  学習プラン
                </span>
                を作ろう
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                無料カウンセリングで、あなたの状況に合わせた
                <br />
                オーダーメイドの学習計画をご提案します。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
                >
                  無料カウンセリングで相談
                  <FaRocket />
                </motion.a>
                <motion.a
                  href="/curriculum"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  カリキュラム詳細
                  <FaArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ScheduleExamplesPage;
