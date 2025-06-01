import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaQuestionCircle,
  FaUserGraduate,
  FaBriefcase,
  FaClock,
  FaMoneyBillWave,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaStar,
} from 'react-icons/fa';

const PricingConsultationPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedPlan, setRecommendedPlan] = useState('');

  const questions = [
    {
      id: 0,
      question: '現在のプログラミング経験は？',
      icon: FaUserGraduate,
      options: [
        { value: 'none', label: '全くの未経験', points: { standard: 3, premium: 2, pro: 1 } },
        {
          value: 'self',
          label: '独学で少し触った程度',
          points: { standard: 2, premium: 3, pro: 2 },
        },
        {
          value: 'school',
          label: 'スクールで学習経験あり',
          points: { standard: 1, premium: 2, pro: 3 },
        },
        { value: 'work', label: '実務経験あり', points: { standard: 0, premium: 1, pro: 3 } },
      ],
    },
    {
      id: 1,
      question: '転職までの希望期間は？',
      icon: FaClock,
      options: [
        { value: '3months', label: '3ヶ月以内', points: { standard: 1, premium: 2, pro: 3 } },
        { value: '6months', label: '6ヶ月以内', points: { standard: 3, premium: 2, pro: 1 } },
        { value: '1year', label: '1年以内', points: { standard: 3, premium: 1, pro: 0 } },
        {
          value: 'flexible',
          label: '特に決めていない',
          points: { standard: 2, premium: 2, pro: 1 },
        },
      ],
    },
    {
      id: 2,
      question: '目標とする年収は？',
      icon: FaMoneyBillWave,
      options: [
        { value: '400', label: '400万円～', points: { standard: 3, premium: 2, pro: 1 } },
        { value: '500', label: '500万円～', points: { standard: 1, premium: 3, pro: 2 } },
        { value: '600', label: '600万円～', points: { standard: 0, premium: 2, pro: 3 } },
        { value: '700', label: '700万円以上', points: { standard: 0, premium: 1, pro: 3 } },
      ],
    },
    {
      id: 3,
      question: '希望する働き方は？',
      icon: FaBriefcase,
      options: [
        { value: 'office', label: 'オフィス勤務', points: { standard: 2, premium: 2, pro: 2 } },
        { value: 'remote', label: 'フルリモート', points: { standard: 1, premium: 2, pro: 3 } },
        { value: 'hybrid', label: 'ハイブリッド', points: { standard: 2, premium: 3, pro: 2 } },
        { value: 'global', label: '海外も視野に', points: { standard: 0, premium: 2, pro: 3 } },
      ],
    },
    {
      id: 4,
      question: '学習に使える時間は？',
      icon: FaClock,
      options: [
        { value: '2hours', label: '1日2時間程度', points: { standard: 3, premium: 1, pro: 0 } },
        { value: '4hours', label: '1日4時間程度', points: { standard: 2, premium: 3, pro: 1 } },
        { value: '6hours', label: '1日6時間程度', points: { standard: 1, premium: 2, pro: 3 } },
        {
          value: 'fulltime',
          label: 'フルタイムで学習可能',
          points: { standard: 0, premium: 1, pro: 3 },
        },
      ],
    },
  ];

  const plans = {
    standard: {
      name: 'スタンダードプラン',
      price: '398,000円',
      color: 'from-blue-600 to-cyan-600',
      features: [
        '基礎から着実に学べるカリキュラム',
        'メンターによる週1回のサポート',
        '転職活動の基本サポート',
        '6ヶ月間の学習期間',
      ],
      recommended: 'プログラミング未経験から着実にスキルを身につけたい方',
    },
    premium: {
      name: 'プレミアムプラン',
      price: '598,000円',
      color: 'from-purple-600 to-pink-600',
      features: [
        '実践的なプロジェクト開発',
        '専任メンターの手厚いサポート',
        'グローバルプロジェクト参加',
        '充実の転職サポート',
      ],
      recommended: '効率的に学習して確実に転職を成功させたい方',
    },
    pro: {
      name: 'プロプラン',
      price: '798,000円',
      color: 'from-orange-600 to-red-600',
      features: [
        '最速でのスキル習得プログラム',
        '1対1の完全個別指導',
        'ハイレベル企業への転職保証',
        '年収600万円以上を目指す',
      ],
      recommended: '最短で高年収エンジニアを目指す方',
    },
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const scores = { standard: 0, premium: 0, pro: 0 };

    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions[parseInt(questionId)];
      const option = question.options.find((opt) => opt.value === answer);
      if (option) {
        scores.standard += option.points.standard;
        scores.premium += option.points.premium;
        scores.pro += option.points.pro;
      }
    });

    const maxScore = Math.max(scores.standard, scores.premium, scores.pro);
    if (scores.pro === maxScore) {
      setRecommendedPlan('pro');
    } else if (scores.premium === maxScore) {
      setRecommendedPlan('premium');
    } else {
      setRecommendedPlan('standard');
    }

    setShowResult(true);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setRecommendedPlan('');
  };

  return (
    <>
      <Head>
        <title>プラン診断 - OffshoreFlow</title>
        <meta
          name="description"
          content="あなたに最適なプランを診断。5つの質問に答えるだけで、おすすめのプランをご提案します。"
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
                あなたに最適な
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  プラン診断
                </span>
              </h1>
              <p className="text-xl text-gray-300">5つの質問に答えるだけで、最適なプランをご提案</p>
            </motion.div>
          </div>
        </section>

        {/* Quiz Section */}
        {!showResult ? (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">
                      質問 {currentStep + 1} / {questions.length}
                    </span>
                    <span className="text-sm text-gray-400">
                      {Math.round(((currentStep + 1) / questions.length) * 100)}% 完了
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="bg-gray-900/50 rounded-2xl p-8 md:p-12"
                  >
                    <div className="text-center mb-8">
                      {(() => {
                        const IconComponent = questions[currentStep].icon;
                        return <IconComponent className="text-6xl text-purple-400 mx-auto mb-4" />;
                      })()}
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {questions[currentStep].question}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {questions[currentStep].options.map((option, index) => (
                        <motion.button
                          key={option.value}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleAnswer(option.value)}
                          className="w-full p-6 bg-gray-800 hover:bg-gray-700 rounded-xl text-left transition-all hover:scale-[1.02] border border-gray-700 hover:border-purple-500"
                        >
                          <span className="text-lg">{option.label}</span>
                        </motion.button>
                      ))}
                    </div>

                    {currentStep > 0 && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={handleBack}
                        className="mt-8 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <FaArrowLeft />
                        前の質問に戻る
                      </motion.button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>
        ) : (
          /* Result Section */
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6"
                  >
                    <FaCheckCircle className="text-4xl" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">診断結果</h2>
                  <p className="text-xl text-gray-300">あなたにおすすめのプランは...</p>
                </div>

                {/* Recommended Plan */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`bg-gradient-to-br ${plans[recommendedPlan as keyof typeof plans].color} p-1 rounded-2xl mb-8`}
                >
                  <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <FaStar />
                        おすすめ
                      </div>
                      <h3 className="text-3xl font-bold mb-2">
                        {plans[recommendedPlan as keyof typeof plans].name}
                      </h3>
                      <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                        {plans[recommendedPlan as keyof typeof plans].price}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-4">このプランの特徴</h4>
                      <ul className="space-y-3">
                        {plans[recommendedPlan as keyof typeof plans].features.map(
                          (feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6">
                      <p className="text-gray-300">
                        <span className="font-bold">おすすめの理由：</span>
                        {plans[recommendedPlan as keyof typeof plans].recommended}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Other Plans */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">その他のプラン</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(plans)
                      .filter(([key]) => key !== recommendedPlan)
                      .map(([key, plan]) => (
                        <div key={key} className="bg-gray-800 rounded-2xl p-6">
                          <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                          <p className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            {plan.price}
                          </p>
                          <ul className="space-y-2 text-sm text-gray-300">
                            {plan.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <FaCheckCircle className="text-gray-500 mt-0.5 flex-shrink-0 text-xs" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                >
                  <Link
                    href={`/contact?plan=${recommendedPlan}`}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                  >
                    無料カウンセリングを予約
                    <FaArrowRight />
                  </Link>
                  <button
                    onClick={restart}
                    className="inline-flex items-center justify-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                  >
                    もう一度診断する
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default PricingConsultationPage;
