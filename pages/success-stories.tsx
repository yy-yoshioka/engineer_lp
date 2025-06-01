import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaStar,
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaChartLine,
  FaQuoteLeft,
  FaFilter,
  FaUserTie,
  FaRocket,
  FaCheckCircle,
} from 'react-icons/fa';

interface SuccessStory {
  id: string;
  name: string;
  age: number;
  avatar: string;
  previousJob: string;
  currentJob: string;
  company: string;
  salary: string;
  salaryIncrease: string;
  duration: string;
  rating: number;
  tags: string[];
  summary: string;
  quote: string;
  keyPoints: string[];
  image?: string;
}

const SuccessStoriesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const successStories: SuccessStory[] = [
    {
      id: 'takumi-23',
      name: 'Takumi',
      age: 23,
      avatar: 'T',
      previousJob: 'フリーター',
      currentJob: 'フロントエンドエンジニア',
      company: 'テックスタートアップ',
      salary: '年収450万円',
      salaryIncrease: '+450万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['未経験', 'フロントエンド', 'React'],
      summary: 'コンビニバイトから一念発起。3ヶ月でReactエンジニアに転職成功。',
      quote: 'まじで人生変わった。毎朝起きるのが楽しみになったし、将来の不安がなくなった。',
      keyPoints: [
        '完全未経験からのスタート',
        '毎日5時間の学習を継続',
        'ポートフォリオが評価されて内定',
        '現在はReact/Next.jsで開発',
      ],
    },
    {
      id: 'yui-26',
      name: 'Yui',
      age: 26,
      avatar: 'Y',
      previousJob: '事務職',
      currentJob: 'フルスタックエンジニア',
      company: 'メガベンチャー',
      salary: '年収600万円',
      salaryIncrease: '+300万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['女性エンジニア', 'フルスタック', 'キャリアチェンジ'],
      summary: '事務職の将来性に不安を感じ、エンジニアへキャリアチェンジ。',
      quote: '女性でも全然関係ない！むしろ女性エンジニアは重宝されるし、働きやすい環境が多い。',
      keyPoints: [
        '事務経験を活かした要件定義力',
        '英語力を活かして海外チームと協業',
        'フロントもバックも担当',
        'リモートワーク実現',
      ],
    },
    {
      id: 'kenji-29',
      name: 'Kenji',
      age: 29,
      avatar: 'K',
      previousJob: '営業職',
      currentJob: 'バックエンドエンジニア',
      company: 'SaaS企業',
      salary: '年収550万円',
      salaryIncrease: '+150万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['営業からエンジニア', 'バックエンド', 'Node.js'],
      summary: '営業のストレスから解放。手に職をつけて安定したキャリアへ。',
      quote: 'ノルマに追われる日々から、自分のペースで成長できる環境に変わった。',
      keyPoints: [
        '営業経験が要件定義で活きる',
        'Node.js/Express専門',
        'API設計・開発を担当',
        '残業ほぼゼロを実現',
      ],
    },
    {
      id: 'mika-31',
      name: 'Mika',
      age: 31,
      avatar: 'M',
      previousJob: '飲食店店長',
      currentJob: 'Webエンジニア',
      company: 'Web制作会社',
      salary: '年収480万円',
      salaryIncrease: '+180万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['30代', '異業種転職', 'Web制作'],
      summary: '30歳を機に飲食業界から転職。家族との時間が増えて幸せ。',
      quote: '土日休みって最高！子供の成長を見られるようになった。',
      keyPoints: [
        '30代でも遅くない',
        'マネジメント経験が評価',
        'WordPress開発がメイン',
        '定時退社が基本',
      ],
    },
    {
      id: 'sota-24',
      name: 'Sota',
      age: 24,
      avatar: 'S',
      previousJob: '大学中退',
      currentJob: 'モバイルエンジニア',
      company: 'ゲーム開発会社',
      salary: '年収500万円',
      salaryIncrease: '+500万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['学歴不問', 'React Native', 'ゲーム業界'],
      summary: '大学を中退して不安だったが、スキルで勝負できる世界を発見。',
      quote: '学歴なんて関係ない。コードが書ければ評価される。',
      keyPoints: [
        'React Native専門',
        'ゲームアプリ開発',
        '海外チームとの共同開発',
        '年齢関係なく実力評価',
      ],
    },
    {
      id: 'rina-28',
      name: 'Rina',
      age: 28,
      avatar: 'R',
      previousJob: '派遣社員',
      currentJob: 'フロントエンドエンジニア',
      company: 'EC企業',
      salary: '年収520万円',
      salaryIncrease: '+220万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['派遣から正社員', 'EC業界', 'Vue.js'],
      summary: '派遣の不安定さから脱却。正社員エンジニアとして安定。',
      quote: '将来の不安がなくなった。スキルアップすれば給料も上がる。',
      keyPoints: [
        'Vue.js/Nuxt.js専門',
        'ECサイトのフロントエンド',
        '正社員として安定雇用',
        'スキルアップ支援充実',
      ],
    },
  ];

  const filters = [
    { value: 'all', label: 'すべて' },
    { value: '未経験', label: '完全未経験' },
    { value: '女性エンジニア', label: '女性' },
    { value: '30代', label: '30代以上' },
    { value: 'フロントエンド', label: 'フロントエンド' },
    { value: 'バックエンド', label: 'バックエンド' },
    { value: 'フルスタック', label: 'フルスタック' },
  ];

  const filteredStories =
    selectedFilter === 'all'
      ? successStories
      : successStories.filter((story) => story.tags.includes(selectedFilter));

  const stats = {
    totalGraduates: 500,
    averageSalaryIncrease: 250,
    successRate: 92,
    averageAge: 27,
  };

  return (
    <>
      <Head>
        <title>成功事例 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlow卒業生の転職成功ストーリー。未経験から年収600万円のエンジニアになった実例を紹介。"
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
                <FaGraduationCap className="text-purple-400" />
                <span className="text-sm">500名以上が転職成功</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                卒業生の
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  成功事例
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                未経験から3ヶ月でエンジニアに転職。
                <br />
                人生を変えた先輩たちのリアルな声。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Stats */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: '卒業生数', value: `${stats.totalGraduates}名+`, icon: FaGraduationCap },
                {
                  label: '平均年収UP',
                  value: `+${stats.averageSalaryIncrease}万円`,
                  icon: FaChartLine,
                },
                { label: '転職成功率', value: `${stats.successRate}%`, icon: FaRocket },
                { label: '平均年齢', value: `${stats.averageAge}歳`, icon: FaUserTie },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-3">
                    <stat.icon className="text-xl" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <FaFilter className="text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedFilter === filter.value
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all group"
                >
                  {/* Header */}
                  <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold">
                          {story.avatar}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            {story.name} ({story.age}歳)
                          </h3>
                          <p className="text-sm text-gray-400">
                            {story.previousJob} → {story.currentJob}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>

                    {/* Company & Salary */}
                    <div className="space-y-1">
                      <p className="text-sm text-gray-300">
                        <FaBriefcase className="inline mr-2 text-gray-400" />
                        {story.company}
                      </p>
                      <p className="text-2xl font-bold text-green-400">{story.salary}</p>
                      <p className="text-sm text-gray-400">
                        年収アップ:{' '}
                        <span className="text-green-400 font-semibold">{story.salaryIncrease}</span>
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{story.summary}</p>

                    {/* Quote */}
                    <div className="bg-gray-900 rounded-xl p-4 mb-4">
                      <FaQuoteLeft className="text-purple-400 mb-2" />
                      <p className="text-sm italic text-gray-300">{story.quote}</p>
                    </div>

                    {/* Key Points */}
                    <div className="space-y-2 mb-6">
                      {story.keyPoints.slice(0, 3).map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/success-stories/${story.id}`}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:gap-3"
                    >
                      詳しく読む
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
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
                卒業生からの
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  メッセージ
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 md:p-12 border border-purple-500/30"
              >
                <FaQuoteLeft className="text-4xl text-purple-400 mb-6" />
                <blockquote className="text-xl md:text-2xl text-gray-300 mb-6">
                  「OffshoreFlowを選んで本当に良かった。
                  <br />
                  未経験の私でも、海外エンジニアと一緒に開発できるレベルまで成長できた。
                  <br />
                  <span className="text-purple-400 font-semibold">人生が180度変わりました。</span>」
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold">
                    H
                  </div>
                  <div>
                    <p className="font-semibold">Hiroki (25歳)</p>
                    <p className="text-sm text-gray-400">元コンビニ店員 → フルスタックエンジニア</p>
                  </div>
                </div>
              </motion.div>
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
                次はあなたが
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  成功する番
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                先輩たちと同じように、3ヶ月後には
                <br />
                エンジニアとして活躍できます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
                >
                  無料カウンセリングを予約
                  <FaRocket />
                </motion.a>
                <motion.a
                  href="/curriculum"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  カリキュラムを見る
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

export default SuccessStoriesPage;
