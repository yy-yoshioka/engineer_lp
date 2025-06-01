import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaCalendarAlt,
  FaUsers,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaTrophy,
  FaDiscord,
  FaYoutube,
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaUserTie,
} from 'react-icons/fa';

const CommunityEventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'すべて', icon: FaCalendarAlt },
    { id: 'workshop', name: 'ワークショップ', icon: FaLaptopCode },
    { id: 'seminar', name: 'セミナー', icon: FaChalkboardTeacher },
    { id: 'networking', name: '交流会', icon: FaUsers },
    { id: 'contest', name: 'コンテスト', icon: FaTrophy },
  ];

  const events = [
    {
      id: 1,
      title: 'React実践ワークショップ',
      category: 'workshop',
      date: '2024-03-15',
      time: '19:00-21:00',
      location: 'オンライン',
      description: 'Reactの実践的な使い方を学ぶハンズオンワークショップ',
      instructor: '山田太郎（シニアエンジニア）',
      capacity: 30,
      registered: 24,
      level: '中級',
      tags: ['React', 'フロントエンド'],
      isPopular: true,
    },
    {
      id: 2,
      title: 'エンジニア転職成功の秘訣',
      category: 'seminar',
      date: '2024-03-18',
      time: '20:00-21:30',
      location: 'オンライン',
      description: '転職成功者が語る、未経験からの転職戦略',
      instructor: '鈴木花子（キャリアアドバイザー）',
      capacity: 50,
      registered: 42,
      level: '初級',
      tags: ['転職', 'キャリア'],
      isPopular: true,
    },
    {
      id: 3,
      title: '現役エンジニアとの交流会',
      category: 'networking',
      date: '2024-03-22',
      time: '19:30-21:30',
      location: '東京・渋谷',
      description: '現役エンジニアと直接話せる貴重な機会',
      instructor: '',
      capacity: 20,
      registered: 18,
      level: 'すべて',
      tags: ['交流', 'ネットワーキング'],
      isPopular: false,
    },
    {
      id: 4,
      title: 'ポートフォリオレビュー会',
      category: 'workshop',
      date: '2024-03-25',
      time: '14:00-16:00',
      location: 'オンライン',
      description: '作成したポートフォリオを現役エンジニアがレビュー',
      instructor: '佐藤健（フリーランスエンジニア）',
      capacity: 15,
      registered: 15,
      level: '中級',
      tags: ['ポートフォリオ', 'レビュー'],
      isPopular: false,
    },
    {
      id: 5,
      title: 'Web開発コンテスト',
      category: 'contest',
      date: '2024-03-30',
      time: '10:00-18:00',
      location: 'オンライン',
      description: '24時間でWebアプリを開発するハッカソン',
      instructor: '',
      capacity: 100,
      registered: 87,
      level: '中級以上',
      tags: ['ハッカソン', 'コンテスト'],
      isPopular: true,
    },
  ];

  const upcomingWorkshops = [
    { title: 'TypeScript入門', date: '2024-04-05', instructor: '田中一郎' },
    { title: 'AWS基礎講座', date: '2024-04-12', instructor: '山本二郎' },
    { title: 'Git/GitHub実践', date: '2024-04-19', instructor: '伊藤三郎' },
  ];

  const communityStats = [
    { label: 'アクティブメンバー', value: '1,200+', icon: FaUsers },
    { label: '月間イベント数', value: '20+', icon: FaCalendarAlt },
    { label: 'Discord参加者', value: '800+', icon: FaDiscord },
    { label: 'YouTube登録者', value: '5,000+', icon: FaYoutube },
  ];

  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <>
      <Head>
        <title>コミュニティイベント - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowのコミュニティイベント情報。ワークショップ、セミナー、交流会など、学習を加速させるイベントが満載。"
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
                <FaUsers className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                コミュニティ
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  イベント
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                仲間と一緒に成長できる、充実のイベントプログラム
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="text-3xl text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {eventCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="text-sm" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">今月のイベント</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all group"
                  >
                    {/* Event Header */}
                    <div className="p-6">
                      {event.isPopular && (
                        <div className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold mb-3">
                          <FaStar />
                          人気イベント
                        </div>
                      )}

                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-purple-400" />
                          <span>
                            {new Date(event.date).toLocaleDateString('ja-JP', {
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="text-purple-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-purple-400" />
                          <span>{event.location}</span>
                        </div>
                        {event.instructor && (
                          <div className="flex items-center gap-2">
                            <FaUserTie className="text-purple-400" />
                            <span>{event.instructor}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-400 text-sm mt-4 mb-4">{event.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Capacity */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>参加者</span>
                          <span>
                            {event.registered}/{event.capacity}名
                          </span>
                        </div>
                        <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                            style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg transition-all group-hover:scale-[1.02]">
                        {event.registered >= event.capacity ? 'キャンセル待ち' : '参加申込み'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Workshops */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">次回開催予定のワークショップ</h2>

              <div className="space-y-4">
                {upcomingWorkshops.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800 rounded-xl p-6 flex items-center justify-between hover:bg-gray-700 transition-colors"
                  >
                    <div>
                      <h3 className="font-bold text-lg mb-1">{workshop.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt />
                          {new Date(workshop.date).toLocaleDateString('ja-JP')}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaUserTie />
                          {workshop.instructor}
                        </span>
                      </div>
                    </div>
                    <FaArrowRight className="text-purple-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">コミュニティに参加しよう</h2>
              <p className="text-gray-400">様々なチャンネルで仲間と繋がろう</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="https://discord.gg/offshoreflow"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#5865F2] rounded-2xl p-8 text-center hover:bg-[#4752C4] transition-colors group"
              >
                <FaDiscord className="text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Discord</h3>
                <p className="text-gray-200 mb-4">
                  リアルタイムで質問や相談ができる
                  <br />
                  アクティブなコミュニティ
                </p>
                <span className="inline-flex items-center gap-2 text-lg font-semibold group-hover:gap-3 transition-all">
                  参加する
                  <FaArrowRight />
                </span>
              </motion.a>

              <motion.a
                href="https://youtube.com/@offshoreflow"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FF0000] rounded-2xl p-8 text-center hover:bg-[#CC0000] transition-colors group"
              >
                <FaYoutube className="text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">YouTube</h3>
                <p className="text-gray-200 mb-4">
                  プログラミング学習動画や
                  <br />
                  イベントのアーカイブを配信
                </p>
                <span className="inline-flex items-center gap-2 text-lg font-semibold group-hover:gap-3 transition-all">
                  チャンネル登録
                  <FaArrowRight />
                </span>
              </motion.a>
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
                一緒に成長する仲間が待っています
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                OffshoreFlowで、エンジニアへの第一歩を踏み出しましょう
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
              >
                無料カウンセリングを予約
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CommunityEventsPage;
