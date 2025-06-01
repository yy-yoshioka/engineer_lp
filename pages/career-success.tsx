import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaChartLine,
  FaMoneyBillWave,
  FaBuilding,
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaGraduationCap,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const CareerSuccessPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const successData = {
    '2024': {
      placementRate: 92,
      averageSalaryIncrease: 185,
      averageJobSearchDays: 25,
      totalGraduates: 120,
      remoteWorkRate: 68,
    },
    '2023': {
      placementRate: 89,
      averageSalaryIncrease: 172,
      averageJobSearchDays: 28,
      totalGraduates: 98,
      remoteWorkRate: 62,
    },
    '2022': {
      placementRate: 87,
      averageSalaryIncrease: 165,
      averageJobSearchDays: 32,
      totalGraduates: 76,
      remoteWorkRate: 55,
    },
  };

  const salaryDistribution = [
    { range: '300-400万円', percentage: 12, count: 14 },
    { range: '400-500万円', percentage: 28, count: 34 },
    { range: '500-600万円', percentage: 35, count: 42 },
    { range: '600-700万円', percentage: 18, count: 22 },
    { range: '700万円以上', percentage: 7, count: 8 },
  ];

  const companyTypes = [
    { type: 'メガベンチャー', percentage: 32, companies: ['メルカリ', 'SmartHR', 'freee'] },
    { type: '大手IT企業', percentage: 28, companies: ['楽天', 'サイバーエージェント', 'DeNA'] },
    { type: 'スタートアップ', percentage: 22, companies: ['UUUM', 'BASE', 'Timee'] },
    { type: '外資系企業', percentage: 12, companies: ['Google', 'Amazon', 'Microsoft'] },
    { type: 'SIer/受託開発', percentage: 6, companies: ['NTTデータ', 'アクセンチュア'] },
  ];

  const industries = [
    { name: 'Web系', percentage: 45, icon: '🌐' },
    { name: 'フィンテック', percentage: 18, icon: '💰' },
    { name: 'AI/機械学習', percentage: 12, icon: '🤖' },
    { name: 'ゲーム', percentage: 10, icon: '🎮' },
    { name: 'EC/小売', percentage: 8, icon: '🛒' },
    { name: 'その他', percentage: 7, icon: '📱' },
  ];

  const successStories = [
    {
      name: '田中 健太',
      age: 28,
      previousJob: '営業職（不動産）',
      previousSalary: '年収420万円',
      currentJob: 'フルスタックエンジニア',
      currentCompany: 'メガベンチャー',
      currentSalary: '年収650万円',
      increase: '+230万円',
      learningPeriod: '3ヶ月',
      message:
        '未経験からでも本当にエンジニアになれました。メンターのサポートが手厚く、転職活動も安心して進められました。',
    },
    {
      name: '山田 美咲',
      age: 25,
      previousJob: '事務職（メーカー）',
      previousSalary: '年収350万円',
      currentJob: 'フロントエンドエンジニア',
      currentCompany: '外資系IT企業',
      currentSalary: '年収580万円',
      increase: '+230万円',
      learningPeriod: '4ヶ月',
      message:
        'リモートワークで働きたいという夢が叶いました。学習は大変でしたが、同期と励まし合いながら乗り越えられました。',
    },
    {
      name: '佐藤 大輔',
      age: 32,
      previousJob: '飲食店店長',
      previousSalary: '年収380万円',
      currentJob: 'バックエンドエンジニア',
      currentCompany: 'スタートアップ',
      currentSalary: '年収550万円',
      increase: '+170万円',
      learningPeriod: '5ヶ月',
      message:
        '30代からの転職で不安でしたが、年齢は関係ないことを実感。今は毎日コードを書くのが楽しいです。',
    },
  ];

  return (
    <>
      <Head>
        <title>転職実績 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの転職成功実績。転職成功率92%、平均年収185万円UP、多数の卒業生が理想のキャリアを実現。"
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl mb-6">
                <FaTrophy className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                転職成功
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                  実績
                </span>
              </h1>
              <p className="text-xl text-gray-300">数字で見る、卒業生たちの成功ストーリー</p>
            </motion.div>
          </div>
        </section>

        {/* Year Selector */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4">
              {Object.keys(successData).map((year) => (
                <motion.button
                  key={year}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {year}年度
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 text-center border border-green-500/30"
              >
                <FaChartLine className="text-3xl text-green-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">
                  {successData[selectedYear as keyof typeof successData].placementRate}%
                </div>
                <p className="text-sm text-gray-400">転職成功率</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 text-center border border-blue-500/30"
              >
                <FaMoneyBillWave className="text-3xl text-blue-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">
                  +{successData[selectedYear as keyof typeof successData].averageSalaryIncrease}万円
                </div>
                <p className="text-sm text-gray-400">平均年収UP</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 text-center border border-purple-500/30"
              >
                <FaClock className="text-3xl text-purple-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">
                  {successData[selectedYear as keyof typeof successData].averageJobSearchDays}日
                </div>
                <p className="text-sm text-gray-400">平均転職期間</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 rounded-2xl p-6 text-center border border-orange-500/30"
              >
                <FaGraduationCap className="text-3xl text-orange-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-2">
                  {successData[selectedYear as keyof typeof successData].totalGraduates}名
                </div>
                <p className="text-sm text-gray-400">卒業生数</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-2xl p-6 text-center border border-pink-500/30"
              >
                <FaMapMarkerAlt className="text-3xl text-pink-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-pink-400 mb-2">
                  {successData[selectedYear as keyof typeof successData].remoteWorkRate}%
                </div>
                <p className="text-sm text-gray-400">リモート率</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Salary Distribution */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">転職後の年収分布</h2>
              <p className="text-gray-400">2024年度卒業生の実績</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {salaryDistribution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{item.range}</span>
                    <span className="text-sm text-gray-400">
                      {item.count}名 ({item.percentage}%)
                    </span>
                  </div>
                  <div className="bg-gray-800 rounded-full h-8 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-end pr-3"
                    >
                      <span className="text-xs font-bold">{item.percentage}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">転職先企業の種類</h2>
              <p className="text-gray-400">多様な企業への転職を実現</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {companyTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{type.type}</h3>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                      {type.percentage}%
                    </span>
                  </div>
                  <div className="space-y-2">
                    {type.companies.map((company, companyIndex) => (
                      <div
                        key={companyIndex}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <FaBuilding className="text-gray-500" />
                        <span>{company}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">業界別転職実績</h2>
              <p className="text-gray-400">様々な業界で活躍する卒業生</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="font-bold mb-2">{industry.name}</h3>
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                    {industry.percentage}%
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">転職成功者の声</h2>
              <p className="text-gray-400">実際に転職に成功した卒業生のリアルな声</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                >
                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {story.name} ({story.age}歳)
                      </h3>
                      <p className="text-sm text-gray-400">学習期間: {story.learningPeriod}</p>
                    </div>
                  </div>

                  {/* Career Change */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-800 rounded-xl p-4">
                      <p className="text-xs text-gray-400 mb-1">前職</p>
                      <p className="font-semibold">{story.previousJob}</p>
                      <p className="text-sm text-gray-300">{story.previousSalary}</p>
                    </div>

                    <div className="text-center">
                      <FaArrowRight className="text-green-400 mx-auto" />
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl p-4 border border-green-500/30">
                      <p className="text-xs text-green-400 mb-1">現職</p>
                      <p className="font-semibold">{story.currentJob}</p>
                      <p className="text-sm">{story.currentCompany}</p>
                      <p className="text-lg font-bold text-green-400">{story.currentSalary}</p>
                    </div>
                  </div>

                  {/* Salary Increase */}
                  <div className="text-center mb-6">
                    <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold">
                      <FaMoneyBillWave />
                      {story.increase}
                    </span>
                  </div>

                  {/* Message */}
                  <p className="text-sm text-gray-300 italic">&quot;{story.message}&quot;</p>

                  {/* Rating */}
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">次はあなたの番です</h2>
              <p className="text-xl text-gray-300 mb-8">
                92%の転職成功率で、理想のエンジニアキャリアを実現しましょう
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                >
                  無料カウンセリングを予約
                  <FaArrowRight />
                </Link>
                <Link
                  href="/success-stories"
                  className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                >
                  もっと詳しい体験談を見る
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CareerSuccessPage;
