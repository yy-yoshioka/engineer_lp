import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaCheckCircle,
  FaTimes,
  FaStar,
  FaArrowRight,
  FaGlobe,
  FaUserTie,
  FaUsers,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaLaptopCode,
  FaChartLine,
  FaMedal,
  FaQuestionCircle,
} from 'react-icons/fa';

const ComparisonPage = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const schools = [
    {
      name: 'OffshoreFlow',
      logo: '🚀',
      highlight: true,
      features: {
        price: '398,000円〜',
        duration: '3ヶ月〜',
        support: '24/7サポート',
        jobPlacement: '92%',
        curriculum: '実践的プロジェクト',
        mentor: '専任メンター',
        global: 'グローバル開発',
        community: '活発なコミュニティ',
        guarantee: '転職保証あり',
      },
    },
    {
      name: 'A社',
      logo: '📚',
      highlight: false,
      features: {
        price: '690,000円〜',
        duration: '6ヶ月〜',
        support: '営業時間のみ',
        jobPlacement: '85%',
        curriculum: '教科書中心',
        mentor: '集団授業',
        global: 'なし',
        community: '小規模',
        guarantee: 'なし',
      },
    },
    {
      name: 'B社',
      logo: '💻',
      highlight: false,
      features: {
        price: '798,000円〜',
        duration: '4ヶ月〜',
        support: '週3回',
        jobPlacement: '80%',
        curriculum: '動画学習',
        mentor: 'チャット対応',
        global: 'なし',
        community: 'なし',
        guarantee: '条件付き',
      },
    },
    {
      name: 'C社',
      logo: '🎓',
      highlight: false,
      features: {
        price: '548,000円〜',
        duration: '6ヶ月〜',
        support: '平日のみ',
        jobPlacement: '78%',
        curriculum: '基礎重視',
        mentor: 'グループ',
        global: 'なし',
        community: '月1回',
        guarantee: 'なし',
      },
    },
  ];

  const featureDetails = {
    price: {
      title: '受講料金',
      icon: FaMoneyBillWave,
      description: 'コストパフォーマンスに優れた価格設定',
    },
    duration: {
      title: '学習期間',
      icon: FaCalendarAlt,
      description: '効率的なカリキュラムで最短での習得',
    },
    support: {
      title: 'サポート体制',
      icon: FaUserTie,
      description: 'いつでも質問できる安心のサポート',
    },
    jobPlacement: {
      title: '転職成功率',
      icon: FaChartLine,
      description: '業界トップクラスの転職実績',
    },
    curriculum: {
      title: 'カリキュラム',
      icon: FaLaptopCode,
      description: '実践的なプロジェクトで即戦力を育成',
    },
    mentor: {
      title: 'メンター制度',
      icon: FaUserTie,
      description: '専任メンターによる個別指導',
    },
    global: {
      title: 'グローバル対応',
      icon: FaGlobe,
      description: '海外エンジニアとの開発経験',
    },
    community: {
      title: 'コミュニティ',
      icon: FaUsers,
      description: '活発な交流で学習効果UP',
    },
    guarantee: {
      title: '転職保証',
      icon: FaMedal,
      description: '安心の転職保証制度',
    },
  };

  const advantages = [
    {
      title: 'コスパ最強',
      description: '他社と比較して圧倒的な低価格を実現',
      icon: FaMoneyBillWave,
      highlight: '最大50%オフ',
    },
    {
      title: '実践的カリキュラム',
      description: '現場で使える技術を最短で習得',
      icon: FaLaptopCode,
      highlight: '3ヶ月で即戦力',
    },
    {
      title: 'グローバル経験',
      description: '他社にはない海外エンジニアとの開発',
      icon: FaGlobe,
      highlight: '業界唯一',
    },
    {
      title: '転職成功率No.1',
      description: '92%の高い転職成功率を誇る',
      icon: FaChartLine,
      highlight: '業界最高水準',
    },
  ];

  return (
    <>
      <Head>
        <title>他社比較 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowと他社プログラミングスクールの徹底比較。価格、カリキュラム、サポート体制など、あらゆる面で優位性を解説。"
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
                <FaStar className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                他社との
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  徹底比較
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                なぜOffshoreFlowが選ばれるのか、一目でわかる比較表
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto">
              <table className="w-full max-w-6xl mx-auto">
                <thead>
                  <tr>
                    <th className="text-left p-4 sticky left-0 bg-black z-10">
                      <span className="text-gray-400 text-sm">比較項目</span>
                    </th>
                    {schools.map((school, index) => (
                      <th key={index} className="p-4 text-center min-w-[180px]">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={school.highlight ? 'relative' : ''}
                        >
                          {school.highlight && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-bold">
                              おすすめ
                            </div>
                          )}
                          <div className="text-4xl mb-2">{school.logo}</div>
                          <div
                            className={`font-bold ${school.highlight ? 'text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' : 'text-lg'}`}
                          >
                            {school.name}
                          </div>
                        </motion.div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(featureDetails).map(([key, detail], index) => (
                    <motion.tr
                      key={key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors"
                      onMouseEnter={() => setSelectedFeature(key)}
                      onMouseLeave={() => setSelectedFeature(null)}
                    >
                      <td className="p-4 sticky left-0 bg-black z-10">
                        <div className="flex items-center gap-3">
                          <detail.icon className="text-purple-400" />
                          <div>
                            <div className="font-semibold">{detail.title}</div>
                            {selectedFeature === key && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-xs text-gray-400 mt-1"
                              >
                                {detail.description}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </td>
                      {schools.map((school, schoolIndex) => (
                        <td key={schoolIndex} className="p-4 text-center">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: schoolIndex * 0.1 }}
                            className={school.highlight ? 'font-semibold' : ''}
                          >
                            {key === 'global' || key === 'guarantee' ? (
                              school.features[key as keyof typeof school.features] === 'なし' ? (
                                <FaTimes className="text-red-500 mx-auto" />
                              ) : school.features[key as keyof typeof school.features] ===
                                '条件付き' ? (
                                <span className="text-yellow-500">△</span>
                              ) : (
                                <FaCheckCircle className="text-green-500 mx-auto" />
                              )
                            ) : (
                              <span
                                className={
                                  school.highlight && (key === 'price' || key === 'jobPlacement')
                                    ? 'text-green-400'
                                    : ''
                                }
                              >
                                {school.features[key as keyof typeof school.features]}
                              </span>
                            )}
                          </motion.div>
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Note */}
            <p className="text-center text-sm text-gray-400 mt-4 md:hidden">
              ← 横にスクロールして比較 →
            </p>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">OffshoreFlowの優位性</h2>
              <p className="text-gray-400">他社にはない4つの強み</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <advantage.icon className="text-2xl" />
                      </div>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        {advantage.highlight}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                      <p className="text-gray-300">{advantage.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">よくある質問</h2>
              <p className="text-gray-400">他社と比較してよくいただく質問</p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: 'なぜOffshoreFlowは他社より安いのですか？',
                  answer:
                    'オフショア開発の仕組みを活用し、高品質な教育を低コストで提供できる独自のビジネスモデルを確立しているためです。',
                },
                {
                  question: '転職成功率92%は本当ですか？',
                  answer:
                    'はい、2024年度の実績です。専任のキャリアアドバイザーによる手厚いサポートと、実践的なカリキュラムが高い転職成功率を実現しています。',
                },
                {
                  question: 'グローバル開発経験は本当に必要ですか？',
                  answer:
                    '今後のIT業界では必須のスキルです。リモートワークの普及により、海外エンジニアとの協働は一般的になっています。',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <FaQuestionCircle className="text-purple-400 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
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
                比較して分かるOffshoreFlowの価値
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                まずは無料カウンセリングで、あなたに最適なプランをご提案します
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
                  料金プランを診断
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ComparisonPage;
