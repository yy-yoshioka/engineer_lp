import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { generateCourseSchema } from '../../lib/seo';
import {
  FaBriefcase,
  FaUserTie,
  FaFileAlt,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaMoneyBillWave,
  FaBuilding,
} from 'react-icons/fa';

const CareerSupportPage = () => {
  // 構造化データを生成
  const courseSchema = generateCourseSchema({
    name: '転職サポートプログラム',
    description: '履歴書添削から面接対策、企業紹介まで完全バックアップする転職支援プログラム',
    provider: 'OffshoreFlow',
    url: 'https://offshoreflow.com/services/career-support',
    price: '49800',
    duration: 'P3M', // 3ヶ月
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const supportServices = [
    {
      icon: FaFileAlt,
      title: '履歴書・職務経歴書作成',
      description: 'エンジニア採用に特化した書類作成をプロのキャリアアドバイザーがサポート',
      details: [
        '技術スタックの効果的な記載方法',
        'プロジェクト実績の魅力的な表現',
        '未経験からの転職に強い書き方',
      ],
    },
    {
      icon: FaUserTie,
      title: '面接対策・模擬面接',
      description: '実際の技術面接を想定した実践的な面接トレーニング',
      details: ['技術質問への回答準備', 'コーディングテスト対策', '自己PR・志望動機の磨き上げ'],
    },
    {
      icon: FaHandshake,
      title: '企業紹介・マッチング',
      description: '500社以上の提携企業から最適な企業をご紹介',
      details: ['大手IT企業', '成長中のスタートアップ', 'リモートワーク可能企業'],
    },
    {
      icon: FaMoneyBillWave,
      title: '年収交渉サポート',
      description: '適正な年収を実現するための交渉術をアドバイス',
      details: ['市場価値の正確な把握', '交渉タイミングの見極め', '条件面の総合的な検討'],
    },
  ];

  const careerPath = [
    {
      month: '1ヶ月目',
      title: 'スキル習得期',
      description: 'プログラミング基礎とポートフォリオ作成',
    },
    { month: '2ヶ月目', title: '実践開発期', description: 'チーム開発とプロジェクト経験' },
    { month: '3ヶ月目', title: '転職活動期', description: '書類作成・面接対策・企業選定' },
    { month: '転職後', title: 'フォローアップ', description: '入社後3ヶ月間の定期サポート' },
  ];

  const successStats = [
    { number: '92%', label: '転職成功率', description: '受講生の9割以上が転職に成功' },
    { number: '180万円', label: '平均年収UP', description: '転職前と比較した年収増加額' },
    { number: '25日', label: '平均転職期間', description: '活動開始から内定獲得まで' },
    { number: '98%', label: '満足度', description: '転職先企業での満足度' },
  ];

  const partnerCompanies = [
    { type: '大手IT企業', companies: ['楽天', 'サイバーエージェント', 'DeNA', 'メルカリ'] },
    { type: 'メガベンチャー', companies: ['SmartHR', 'freee', 'Sansan', 'マネーフォワード'] },
    { type: '外資系企業', companies: ['Google', 'Amazon', 'Microsoft', 'Indeed'] },
    { type: 'スタートアップ', companies: ['UUUM', 'BASE', 'Timee', 'LayerX'] },
  ];

  return (
    <>
      <SEO
        title="キャリアサポート - OffshoreFlow"
        description="OffshoreFlowの充実したキャリアサポート。専任アドバイザーが転職成功まで徹底サポート。転職成功率92%の実績。"
        keywords={[
          '転職サポート',
          'キャリア支援',
          'エンジニア転職',
          '転職成功率',
          '履歴書添削',
          '面接対策',
          '企業紹介',
          '転職エージェント',
          'IT転職',
          'プログラマー転職',
        ]}
        canonicalUrl="https://offshoreflow.com/services/career-support"
        structuredData={courseSchema}
      />

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
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl mb-6">
                <FaBriefcase className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                徹底的な
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                  キャリアサポート
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                専任アドバイザーが転職成功まで完全伴走
                <br />
                あなたの理想のキャリアを実現します
              </p>
            </motion.div>
          </div>
        </section>

        {/* Success Stats */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {successStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">4つのキャリアサポート</h2>
              <p className="text-gray-400">転職活動のすべてをプロがサポート</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {supportServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                        <service.icon className="text-2xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Path Timeline */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">転職までのロードマップ</h2>
              <p className="text-gray-400">3ヶ月で理想のキャリアを実現</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-blue-600 hidden md:block" />

                {careerPath.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1">
                      <div
                        className={`bg-gray-800 rounded-2xl p-6 ${
                          index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        <div className="text-sm text-green-400 font-bold mb-2">{phase.month}</div>
                        <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-gray-400">{phase.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Companies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">提携企業500社以上</h2>
              <p className="text-gray-400">あなたに最適な企業をご紹介</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {partnerCompanies.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                    {category.type}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.companies.map((company, companyIndex) => (
                      <div
                        key={companyIndex}
                        className="bg-gray-700 rounded-lg px-4 py-2 text-center text-sm"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-gray-400 mt-8"
            >
              ※上記は提携企業の一部です。他にも多数の優良企業と提携しています。
            </motion.p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">転職成功者の声</h2>
              <p className="text-gray-400">キャリアチェンジに成功した先輩たち</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: '田中 大輔',
                  age: 29,
                  previousJob: '営業職',
                  currentJob: 'バックエンドエンジニア',
                  company: 'メガベンチャー',
                  salary: '+250万円',
                  message:
                    'キャリアアドバイザーの的確なアドバイスのおかげで、未経験から大手企業に転職できました。',
                },
                {
                  name: '山田 愛美',
                  age: 26,
                  previousJob: '事務職',
                  currentJob: 'フロントエンドエンジニア',
                  company: '外資系IT企業',
                  salary: '+200万円',
                  message:
                    '面接対策が本当に役立ちました。自信を持って面接に臨めたのが成功の秘訣です。',
                },
                {
                  name: '佐藤 健一',
                  age: 32,
                  previousJob: '製造業',
                  currentJob: 'フルスタックエンジニア',
                  company: 'スタートアップ',
                  salary: '+180万円',
                  message: '複数の企業を紹介してもらい、自分に合った会社を選ぶことができました。',
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold">
                        {story.name} ({story.age}歳)
                      </h3>
                      <p className="text-sm text-gray-400">
                        {story.previousJob} → {story.currentJob}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <FaBuilding className="text-green-400" />
                      <span>{story.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMoneyBillWave className="text-green-400" />
                      <span className="font-bold">{story.salary}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm italic">&quot;{story.message}&quot;</p>

                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">理想のキャリアを実現しよう</h2>
              <p className="text-xl text-gray-300 mb-8">
                充実のキャリアサポートで、あなたの転職を成功に導きます
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?plan=premium"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                >
                  無料カウンセリングを予約
                  <FaArrowRight />
                </Link>
                <Link
                  href="/career-success"
                  className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                >
                  転職実績を見る
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CareerSupportPage;
