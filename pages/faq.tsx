import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaBook,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaArrowRight,
  FaSearch,
} from 'react-icons/fa';

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'すべて', icon: FaQuestionCircle },
    { id: 'curriculum', name: 'カリキュラム', icon: FaBook },
    { id: 'payment', name: '料金・支払い', icon: FaMoneyBillWave },
    { id: 'learning', name: '学習について', icon: FaGraduationCap },
    { id: 'career', name: '転職サポート', icon: FaBriefcase },
    { id: 'technical', name: '技術・環境', icon: FaLaptopCode },
    { id: 'community', name: 'コミュニティ', icon: FaUsers },
  ];

  const faqs = [
    {
      id: 'faq1',
      category: 'curriculum',
      question: 'プログラミング完全未経験でも大丈夫ですか？',
      answer:
        'はい、大丈夫です。OffshoreFlowの受講生の約70%がプログラミング未経験からスタートしています。基礎から丁寧に学べるカリキュラムと、24時間対応のメンターサポートで、確実にスキルを身につけることができます。',
    },
    {
      id: 'faq2',
      category: 'curriculum',
      question: 'どのようなプログラミング言語を学べますか？',
      answer:
        'HTML/CSS、JavaScript、React、Node.js、TypeScriptなど、現在のWeb開発で最も需要の高い技術を学習します。また、Git、Docker、AWSなどの開発ツールも実践的に習得できます。',
    },
    {
      id: 'faq3',
      category: 'payment',
      question: '分割払いは可能ですか？',
      answer:
        'はい、最大24回までの分割払いが可能です。月々16,500円〜の支払いで受講を開始できます。また、クレジットカード、銀行振込、教育ローンなど、複数の支払い方法をご用意しています。',
    },
    {
      id: 'faq4',
      category: 'payment',
      question: '返金保証はありますか？',
      answer:
        '受講開始から14日以内であれば、理由を問わず全額返金いたします。また、転職保証付きプランでは、一定期間内に転職できなかった場合の返金制度もございます。',
    },
    {
      id: 'faq5',
      category: 'learning',
      question: '働きながらでも学習を続けられますか？',
      answer:
        'はい、受講生の約60%が働きながら学習しています。平日夜間や週末を活用した学習スケジュールの提案や、録画された講義動画でいつでも学習できる環境を整えています。',
    },
    {
      id: 'faq6',
      category: 'learning',
      question: '学習時間の目安はどれくらいですか？',
      answer:
        '週20〜30時間程度の学習時間を推奨しています。フルタイムで学習される方は3ヶ月、働きながらの方は6ヶ月程度での修了を目指します。個人のペースに合わせて柔軟に対応可能です。',
    },
    {
      id: 'faq7',
      category: 'career',
      question: '本当に転職できますか？年齢制限はありますか？',
      answer:
        '2024年度の転職成功率は92%です。20代〜40代まで幅広い年齢層の方が転職に成功しています。年齢よりも学習意欲と継続力が重要です。キャリアアドバイザーが一人ひとりに合った転職戦略を提案します。',
    },
    {
      id: 'faq8',
      category: 'career',
      question: 'どのような企業に転職できますか？',
      answer:
        'メガベンチャー、大手IT企業、スタートアップ、外資系企業など、500社以上の提携企業があります。受講生の希望や適性に合わせて、最適な企業をご紹介します。',
    },
    {
      id: 'faq9',
      category: 'technical',
      question: 'パソコンのスペックはどれくらい必要ですか？',
      answer:
        'メモリ8GB以上、ストレージ256GB以上のPCを推奨しています。WindowsでもMacでも受講可能です。詳しいスペックについては、無料カウンセリングでご相談ください。',
    },
    {
      id: 'faq10',
      category: 'technical',
      question: '開発環境の構築は難しくないですか？',
      answer:
        'ブラウザベースの開発環境を用意しているため、複雑な環境構築は不要です。また、環境構築が必要な場合も、メンターが画面共有でサポートします。',
    },
    {
      id: 'faq11',
      category: 'community',
      question: 'オンラインでも他の受講生と交流できますか？',
      answer:
        'はい、Discord上で24時間アクティブなコミュニティがあります。毎週のオンライン勉強会や、月次のイベントで仲間と交流できます。卒業後も継続して参加可能です。',
    },
    {
      id: 'faq12',
      category: 'community',
      question: 'メンターはどのような方ですか？',
      answer:
        '現役エンジニアとして3年以上の実務経験を持つメンターが担当します。技術的な質問だけでなく、キャリア相談も可能です。受講生一人ひとりに専任メンターがつきます。',
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>よくある質問 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowに関するよくある質問と回答。カリキュラム、料金、転職サポートなど、詳しくお答えします。"
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
                <FaQuestionCircle className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                よくある
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  質問
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                OffshoreFlowについて、みなさまからよくいただく質問にお答えします
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="質問を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {categories.map((category) => (
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

        {/* FAQ List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-400">該当する質問が見つかりませんでした。</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-900 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-6 flex items-center justify-between hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-start gap-4 text-left">
                          <div className="flex-shrink-0 mt-1">
                            {categories.find((cat) => cat.id === faq.category)?.icon && (
                              <div className="text-purple-400">
                                {React.createElement(
                                  categories.find((cat) => cat.id === faq.category)!.icon
                                )}
                              </div>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold">{faq.question}</h3>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          {openItems.includes(faq.id) ? (
                            <FaChevronUp className="text-purple-400" />
                          ) : (
                            <FaChevronDown className="text-gray-400" />
                          )}
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: openItems.includes(faq.id) ? 'auto' : 0,
                          opacity: openItems.includes(faq.id) ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-10 text-gray-300">{faq.answer}</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">その他のご質問はお気軽に</h2>
              <p className="text-xl text-gray-300 mb-8">
                ここに載っていない質問も、無料カウンセリングで
                <br />
                詳しくお答えいたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                >
                  無料カウンセリングを予約
                  <FaArrowRight />
                </Link>
                <a
                  href="mailto:support@offshoreflow.com"
                  className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                >
                  メールで問い合わせる
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQPage;
