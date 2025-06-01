import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaPlay,
  FaVideo,
  FaLaptopCode,
  FaUsers,
  FaChalkboardTeacher,
  FaCode,
  FaTerminal,
  FaRocket,
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaLock,
  FaStar,
} from 'react-icons/fa';

const DemoVideoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('platform');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoCategories = {
    platform: {
      name: '学習プラットフォーム',
      icon: FaLaptopCode,
      description: '実際の学習環境をご紹介',
      videos: [
        {
          id: 'platform-1',
          title: 'プラットフォーム全体の紹介',
          duration: '5:23',
          thumbnail: '/api/placeholder/400/225',
          description: '学習管理システムの使い方、ダッシュボードの見方を解説',
          tags: ['初心者向け', 'プラットフォーム'],
          isPremium: false,
        },
        {
          id: 'platform-2',
          title: 'コードエディタの使い方',
          duration: '8:15',
          thumbnail: '/api/placeholder/400/225',
          description: 'ブラウザ上で動作する統合開発環境の機能紹介',
          tags: ['開発環境', 'エディタ'],
          isPremium: false,
        },
        {
          id: 'platform-3',
          title: '進捗管理とスケジュール機能',
          duration: '4:47',
          thumbnail: '/api/placeholder/400/225',
          description: '学習進捗の確認方法と効率的なスケジュール管理',
          tags: ['進捗管理', 'スケジュール'],
          isPremium: true,
        },
      ],
    },
    lessons: {
      name: 'サンプル講義',
      icon: FaChalkboardTeacher,
      description: '実際の授業の一部を体験',
      videos: [
        {
          id: 'lesson-1',
          title: 'React入門 - コンポーネントの基礎',
          duration: '12:34',
          thumbnail: '/api/placeholder/400/225',
          description: 'Reactの基本概念とコンポーネントの作り方を学習',
          tags: ['React', 'フロントエンド'],
          isPremium: false,
        },
        {
          id: 'lesson-2',
          title: 'Node.js - APIサーバーの構築',
          duration: '15:20',
          thumbnail: '/api/placeholder/400/225',
          description: 'Express.jsを使ったREST APIの作成方法',
          tags: ['Node.js', 'バックエンド'],
          isPremium: true,
        },
        {
          id: 'lesson-3',
          title: 'データベース設計の基礎',
          duration: '10:45',
          thumbnail: '/api/placeholder/400/225',
          description: 'RDBMSの基本とテーブル設計のベストプラクティス',
          tags: ['データベース', 'SQL'],
          isPremium: true,
        },
      ],
    },
    projects: {
      name: 'プロジェクト開発',
      icon: FaCode,
      description: 'チーム開発の様子を公開',
      videos: [
        {
          id: 'project-1',
          title: 'ECサイト開発 - 要件定義編',
          duration: '18:30',
          thumbnail: '/api/placeholder/400/225',
          description: '実際のプロジェクトで行う要件定義のプロセス',
          tags: ['プロジェクト', '要件定義'],
          isPremium: false,
        },
        {
          id: 'project-2',
          title: 'チーム開発のワークフロー',
          duration: '14:22',
          thumbnail: '/api/placeholder/400/225',
          description: 'Git-flowを使った実践的なチーム開発の進め方',
          tags: ['Git', 'チーム開発'],
          isPremium: true,
        },
        {
          id: 'project-3',
          title: 'コードレビューの実際',
          duration: '11:18',
          thumbnail: '/api/placeholder/400/225',
          description: '現役エンジニアによるコードレビューの様子',
          tags: ['コードレビュー', '品質管理'],
          isPremium: true,
        },
      ],
    },
    community: {
      name: 'コミュニティ活動',
      icon: FaUsers,
      description: '受講生の交流の様子',
      videos: [
        {
          id: 'community-1',
          title: '週次オンライン勉強会の様子',
          duration: '7:45',
          thumbnail: '/api/placeholder/400/225',
          description: '毎週開催される勉強会の雰囲気をご紹介',
          tags: ['勉強会', 'コミュニティ'],
          isPremium: false,
        },
        {
          id: 'community-2',
          title: '卒業生インタビュー',
          duration: '22:15',
          thumbnail: '/api/placeholder/400/225',
          description: '転職に成功した卒業生が語る学習体験',
          tags: ['インタビュー', '体験談'],
          isPremium: false,
        },
        {
          id: 'community-3',
          title: 'もくもく会の活用方法',
          duration: '6:30',
          thumbnail: '/api/placeholder/400/225',
          description: 'オンラインもくもく会で効率的に学習する方法',
          tags: ['もくもく会', '学習方法'],
          isPremium: false,
        },
      ],
    },
  };

  const features = [
    {
      icon: FaTerminal,
      title: 'ブラウザで完結',
      description: '環境構築不要ですぐに学習開始',
    },
    {
      icon: FaUsers,
      title: 'リアルタイムサポート',
      description: 'メンターが常時待機してサポート',
    },
    {
      icon: FaCheckCircle,
      title: '実践的カリキュラム',
      description: '現場で使われる技術を習得',
    },
    {
      icon: FaRocket,
      title: '最速で成長',
      description: '効率的な学習で短期間でスキルアップ',
    },
  ];

  const handleVideoClick = (videoId: string, isPremium: boolean) => {
    if (isPremium) {
      // Premium video - show CTA
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  return (
    <>
      <Head>
        <title>デモ動画 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの学習プラットフォームや実際の授業の様子をデモ動画でご覧いただけます。"
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
                <FaVideo className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                デモ
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  動画
                </span>
              </h1>
              <p className="text-xl text-gray-300">実際の学習環境と授業の様子をご覧ください</p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="text-3xl text-purple-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Selection */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {Object.entries(videoCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="inline mr-2" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Info */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">
                  {videoCategories[selectedCategory as keyof typeof videoCategories].name}
                </h2>
                <p className="text-gray-400">
                  {videoCategories[selectedCategory as keyof typeof videoCategories].description}
                </p>
              </motion.div>

              {/* Videos */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoCategories[selectedCategory as keyof typeof videoCategories].videos.map(
                  (video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all group"
                    >
                      {/* Thumbnail */}
                      <div
                        className="relative aspect-video bg-gray-800 cursor-pointer overflow-hidden"
                        onClick={() => handleVideoClick(video.id, video.isPremium)}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
                          >
                            <FaPlay className="text-2xl ml-1" />
                          </motion.div>
                        </div>

                        {/* Duration */}
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
                          <FaClock className="inline mr-1" />
                          {video.duration}
                        </div>

                        {/* Premium Badge */}
                        {video.isPremium && (
                          <div className="absolute top-2 left-2 bg-yellow-500/90 px-3 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1">
                            <FaLock />
                            Premium
                          </div>
                        )}
                      </div>

                      {/* Video Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{video.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {video.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Video Player Modal */}
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                <p className="text-gray-400">動画プレーヤー（デモ）</p>
              </div>
              <button
                onClick={() => setPlayingVideo(null)}
                className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition-colors"
              >
                閉じる
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Premium CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <FaStar />
                Premium動画を視聴するには
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                すべての動画を視聴して
                <br />
                学習内容を確認しよう
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                無料カウンセリングにお申し込みいただくと、
                <br />
                すべてのデモ動画をご覧いただけます
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

export default DemoVideoPage;
