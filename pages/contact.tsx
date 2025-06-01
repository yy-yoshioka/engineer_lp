import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaDiscord,
  FaLightbulb,
  FaBriefcase,
  FaGraduationCap,
  FaComments,
} from 'react-icons/fa';

const ContactPage = () => {
  const router = useRouter();
  const { plan } = router.query;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: plan || '',
    preferredDate: '',
    preferredTime: '',
    currentJob: '',
    experience: '',
    message: '',
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ここで実際のフォーム送信処理
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const timeSlots = [
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];

  return (
    <>
      <Head>
        <title>無料カウンセリング予約 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの無料カウンセリングを予約。あなたに最適なプランをご提案します。"
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
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                無料カウンセリング
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  予約
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                まずは気軽に相談から。
                <br />
                あなたの目標に合わせた最適なプランをご提案します。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: FaComments, title: '完全無料', desc: '料金は一切かかりません' },
                { icon: FaLightbulb, title: 'プラン提案', desc: '最適な学習プランを提案' },
                { icon: FaBriefcase, title: 'キャリア相談', desc: '転職・キャリアアドバイス' },
                { icon: FaGraduationCap, title: '体験授業', desc: '実際の授業を体験可能' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-3">
                    <item.icon className="text-xl" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {!isSubmitted ? (
              <div className="max-w-2xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    {['基本情報', 'プラン選択', '日時選択'].map((label, index) => (
                      <div key={index} className="text-center flex-1">
                        <div
                          className={`text-sm ${step > index ? 'text-purple-400' : 'text-gray-500'}`}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Basic Info */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold mb-6">基本情報を入力</h2>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            お名前 <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                              placeholder="山田 太郎"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            メールアドレス <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                              placeholder="example@email.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            電話番号 <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                              placeholder="090-1234-5678"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">現在のご職業</label>
                          <select
                            name="currentJob"
                            value={formData.currentJob}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                          >
                            <option value="">選択してください</option>
                            <option value="student">学生</option>
                            <option value="employee">会社員</option>
                            <option value="freelance">フリーランス</option>
                            <option value="unemployed">無職</option>
                            <option value="other">その他</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                          次へ
                          <FaArrowRight />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Plan Selection */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold mb-6">興味のあるプランを選択</h2>

                      <div className="space-y-4">
                        {[
                          {
                            value: 'standard',
                            name: 'スタンダード',
                            price: '月額 29,800円',
                            desc: '基本的な学習サポート',
                          },
                          {
                            value: 'premium',
                            name: 'プレミアム',
                            price: '月額 49,800円',
                            desc: '1on1メンタリング付き',
                            popular: true,
                          },
                          {
                            value: 'bootcamp',
                            name: 'ブートキャンプ',
                            price: '一括 398,000円',
                            desc: '転職保証付き集中プログラム',
                          },
                          {
                            value: 'undecided',
                            name: 'まだ決めていない',
                            price: '',
                            desc: 'カウンセリングで相談したい',
                          },
                        ].map((planOption) => (
                          <label
                            key={planOption.value}
                            className={`relative block p-6 bg-gray-800 rounded-xl border-2 cursor-pointer transition-all ${
                              formData.plan === planOption.value
                                ? 'border-purple-500 bg-gray-800/80'
                                : 'border-gray-700 hover:border-gray-600'
                            }`}
                          >
                            {planOption.popular && (
                              <span className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-400 to-orange-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                                人気No.1
                              </span>
                            )}
                            <input
                              type="radio"
                              name="plan"
                              value={planOption.value}
                              checked={formData.plan === planOption.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{planOption.name}</h3>
                                {planOption.price && (
                                  <p className="text-purple-400 font-bold">{planOption.price}</p>
                                )}
                                <p className="text-sm text-gray-400 mt-1">{planOption.desc}</p>
                              </div>
                              <div
                                className={`w-6 h-6 rounded-full border-2 ${
                                  formData.plan === planOption.value
                                    ? 'border-purple-500 bg-purple-500'
                                    : 'border-gray-600'
                                } flex items-center justify-center`}
                              >
                                {formData.plan === planOption.value && (
                                  <FaCheckCircle className="text-xs" />
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">プログラミング経験</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          <option value="">選択してください</option>
                          <option value="none">全くの初心者</option>
                          <option value="self-taught">独学で少し</option>
                          <option value="school">スクールで学習経験あり</option>
                          <option value="work">実務経験あり</option>
                        </select>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors"
                        >
                          戻る
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                          次へ
                          <FaArrowRight />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Schedule */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold mb-6">カウンセリング希望日時</h2>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            希望日 <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="date"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            希望時間帯 <span className="text-red-500">*</span>
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {timeSlots.map((time) => (
                              <label
                                key={time}
                                className={`block p-3 text-center bg-gray-800 rounded-lg border-2 cursor-pointer transition-all ${
                                  formData.preferredTime === time
                                    ? 'border-purple-500 bg-gray-800/80'
                                    : 'border-gray-700 hover:border-gray-600'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="preferredTime"
                                  value={time}
                                  checked={formData.preferredTime === time}
                                  onChange={handleChange}
                                  className="sr-only"
                                />
                                <span className="flex items-center justify-center gap-2">
                                  <FaClock className="text-sm text-gray-400" />
                                  {time}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            ご質問・ご要望（任意）
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="事前に聞きたいことや、相談したい内容があればご記入ください"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <p className="text-sm text-gray-400">
                          ※ カウンセリングは約60分です
                          <br />
                          ※ オンライン（Zoom）で実施します
                          <br />※ 無理な勧誘は一切いたしません
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors"
                        >
                          戻る
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? '送信中...' : '予約を確定'}
                          {!isSubmitting && <FaRocket />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            ) : (
              /* Success Message */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-3xl p-12 border border-green-500/30">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
                    <FaCheckCircle className="text-3xl" />
                  </div>

                  <h2 className="text-3xl font-bold mb-4">予約が完了しました！</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    ご予約ありがとうございます。
                    <br />
                    確認メールをお送りしましたのでご確認ください。
                  </p>

                  <div className="bg-gray-800 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                    <h3 className="font-semibold mb-3">次のステップ：</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>メールで送信されたZoomリンクを確認</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>カウンセリング当日は5分前にアクセス</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>質問したいことをメモしておく</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors"
                    >
                      ホームに戻る
                    </Link>
                    <div>
                      <a
                        href="https://discord.gg/offshoreflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <FaDiscord />
                        コミュニティに参加して待つ
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        input[type='date']::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
        }
      `}</style>
    </>
  );
};

export default ContactPage;
