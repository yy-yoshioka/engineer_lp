import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaHandshake,
  FaArrowRight,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

const CompanyPage = () => {
  const companyInfo = {
    name: '株式会社OffshoreFlow',
    nameEn: 'OffshoreFlow Inc.',
    established: '2020年4月1日',
    capital: '5,000万円',
    employees: '85名（2024年3月現在）',
    ceo: '山田 太郎',
    address: '〒150-0001 東京都渋谷区神宮前1-2-3 OffshoreFlowビル',
    phone: '03-1234-5678',
    email: 'info@offshoreflow.com',
    business: [
      'エンジニア育成プログラムの企画・運営',
      'オフショア開発事業',
      'IT人材紹介・派遣事業',
      'システム開発・コンサルティング',
    ],
  };

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation',
      description: '最新技術を活用し、教育の革新を推進',
    },
    {
      icon: FaGlobe,
      title: 'Global',
      description: '世界中の優秀な人材と繋がる',
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: '学習者同士が支え合うコミュニティ',
    },
    {
      icon: FaHandshake,
      title: 'Trust',
      description: '信頼関係を大切にした事業運営',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: '会社設立',
      description: 'オフショア開発事業からスタート',
    },
    {
      year: '2021',
      title: 'エンジニア育成事業開始',
      description: '第1期生30名でプログラム開始',
    },
    {
      year: '2022',
      title: '事業拡大',
      description: '受講生500名突破、提携企業100社達成',
    },
    {
      year: '2023',
      title: 'グローバル展開',
      description: '6カ国でのグローバル開発体制確立',
    },
    {
      year: '2024',
      title: '更なる成長',
      description: '受講生1,000名突破、転職成功率92%達成',
    },
  ];

  const team = [
    {
      name: '山田 太郎',
      position: '代表取締役CEO',
      description: '元大手IT企業CTO。15年以上のエンジニア経験を持つ。',
      image: '/api/placeholder/200/200',
    },
    {
      name: '佐藤 花子',
      position: '取締役COO',
      description: '人材業界で10年の経験。キャリア支援のスペシャリスト。',
      image: '/api/placeholder/200/200',
    },
    {
      name: '鈴木 一郎',
      position: 'CTO',
      description: 'フルスタックエンジニア。教育プログラムの設計責任者。',
      image: '/api/placeholder/200/200',
    },
    {
      name: '田中 美咲',
      position: 'VP of Engineering',
      description: 'グローバル開発チームを統括。多国籍チームのマネジメント経験豊富。',
      image: '/api/placeholder/200/200',
    },
  ];

  return (
    <>
      <Head>
        <title>会社情報 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの会社概要、ミッション、チームメンバーについてご紹介します。"
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
              お問い合わせ
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
                <FaBuilding className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                会社
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  情報
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                テクノロジーと教育の力で、
                <br />
                世界中の人々に新しいキャリアの可能性を
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                私たちは、プログラミング教育を通じて、
                <br />
                誰もがテクノロジーの力で人生を変えられる世界を創造します。
                <br />
                国境を越えた学習機会を提供し、
                <br />
                グローバルに活躍できるエンジニアを育成します。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">会社概要</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-2xl p-8"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400 w-1/3">会社名</td>
                      <td className="py-4">
                        {companyInfo.name}
                        <br />
                        <span className="text-sm text-gray-400">{companyInfo.nameEn}</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400">設立</td>
                      <td className="py-4">{companyInfo.established}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400">資本金</td>
                      <td className="py-4">{companyInfo.capital}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400">従業員数</td>
                      <td className="py-4">{companyInfo.employees}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400">代表者</td>
                      <td className="py-4">{companyInfo.ceo}</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400">所在地</td>
                      <td className="py-4">
                        <div className="flex items-start gap-2">
                          <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>{companyInfo.address}</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400">電話番号</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <FaPhone className="text-purple-400" />
                          <span>{companyInfo.phone}</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 pr-8 text-gray-400">メール</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-purple-400" />
                          <a
                            href={`mailto:${companyInfo.email}`}
                            className="hover:text-purple-400 transition-colors"
                          >
                            {companyInfo.email}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-8 text-gray-400 align-top">事業内容</td>
                      <td className="py-4">
                        <ul className="space-y-2">
                          {companyInfo.business.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-400">私たちが大切にしている価値観</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">沿革</h2>
              <p className="text-gray-400">OffshoreFlowの成長の軌跡</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600" />

                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-8 mb-12"
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-black rounded-full border-4 border-purple-600 flex items-center justify-center z-10">
                      <span className="text-sm font-bold">{milestone.year}</span>
                    </div>

                    <div className="flex-1 bg-gray-900/50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">経営陣</h2>
              <p className="text-gray-400">OffshoreFlowを支えるリーダーたち</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">一緒に未来を創りませんか？</h2>
              <p className="text-xl text-gray-300 mb-8">
                OffshoreFlowでは一緒に働く仲間を募集しています
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                >
                  お問い合わせ
                  <FaArrowRight />
                </Link>
                <a
                  href="https://careers.offshoreflow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                >
                  採用情報を見る
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com/company/offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://twitter.com/offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="https://facebook.com/offshoreflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CompanyPage;
