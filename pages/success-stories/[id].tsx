import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaArrowLeft,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaCode,
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
  fullStory: string[];
  quote: string;
  keyPoints: string[];
  timeline: {
    week: number;
    title: string;
    description: string;
  }[];
  skills: string[];
  advice: string;
}

const SuccessStoryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // 実際の実装では、APIやデータベースから取得
  const successStories: Record<string, SuccessStory> = {
    'takumi-23': {
      id: 'takumi-23',
      name: 'Takumi',
      age: 23,
      avatar: 'T',
      previousJob: 'フリーター（コンビニバイト）',
      currentJob: 'フロントエンドエンジニア',
      company: 'テックスタートアップ（社員数50名）',
      salary: '年収450万円',
      salaryIncrease: '+450万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['未経験', 'フロントエンド', 'React', '20代前半'],
      summary: 'コンビニバイトから一念発起。3ヶ月でReactエンジニアに転職成功。',
      fullStory: [
        '大学を中退してからずっとフリーターをしていました。コンビニの深夜バイトで生計を立てていましたが、将来への不安が日に日に大きくなっていました。',
        '友人がエンジニアとして活躍している姿を見て、「自分も挑戦してみたい」と思うようになりました。でも、プログラミングなんて全く経験がなく、独学で少し触ってみても全然理解できませんでした。',
        'そんな時にOffshoreFlowを知りました。「3ヶ月で転職」という言葉に半信半疑でしたが、無料カウンセリングを受けてみることに。カウンセラーの方が親身に相談に乗ってくれて、未経験でも大丈夫だと背中を押してもらえました。',
        '学習は正直きつかったです。最初はHTMLとCSSすら理解できず、挫折しそうになることも。でも、メンターの方が根気強く教えてくれて、Discord のコミュニティでは同期の仲間と励まし合いながら頑張れました。',
        '2ヶ月目に入ってReactを学び始めてから、プログラミングの面白さに目覚めました。自分の書いたコードが画面に反映される瞬間の感動は今でも忘れません。',
        '3ヶ月目には実際の開発プロジェクトに参加。ベトナムのエンジニアと一緒に開発する経験は本当に貴重でした。最初は英語でのコミュニケーションに苦労しましたが、技術的な話は意外と通じるものです。',
        '転職活動では、OffshoreFlowで作ったポートフォリオが大きな武器になりました。実際のプロジェクト経験があることが評価され、3社から内定をもらえました。',
        '今は毎日がとても充実しています。新しい技術を学ぶのが楽しくて、休日も自主的にコードを書いています。年収も450万円と、フリーター時代の3倍以上になりました。',
      ],
      quote:
        'まじで人生変わった。毎朝起きるのが楽しみになったし、将来の不安がなくなった。OffshoreFlowに出会えて本当に良かった。',
      keyPoints: [
        '完全未経験からのスタート',
        '毎日5時間の学習を継続',
        'ポートフォリオが評価されて内定',
        '現在はReact/Next.jsで開発',
        '入社後も成長を続けている',
      ],
      timeline: [
        {
          week: 1,
          title: '基礎学習スタート',
          description: 'HTML/CSS/JavaScriptの基礎を学習。最初は全く理解できず苦労。',
        },
        {
          week: 4,
          title: 'React学習開始',
          description: 'Reactの概念を理解するのに時間がかかったが、徐々に楽しくなってきた。',
        },
        {
          week: 8,
          title: '実プロジェクト参加',
          description: '海外チームとの共同開発。実践的なスキルが身についた。',
        },
        {
          week: 11,
          title: '転職活動',
          description: 'ポートフォリオを武器に転職活動。3社から内定獲得。',
        },
        {
          week: 12,
          title: '転職成功',
          description: 'フロントエンドエンジニアとして新しいキャリアをスタート。',
        },
      ],
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Git', 'Tailwind CSS'],
      advice:
        '最初は本当に大変だけど、諦めずに続ければ必ず結果は出ます。コミュニティの仲間と一緒に頑張れば、きっと乗り越えられる。まずは一歩踏み出してみてください！',
    },
    'yui-26': {
      id: 'yui-26',
      name: 'Yui',
      age: 26,
      avatar: 'Y',
      previousJob: '事務職（中小企業）',
      currentJob: 'フルスタックエンジニア',
      company: 'メガベンチャー（社員数1000名以上）',
      salary: '年収600万円',
      salaryIncrease: '+300万円',
      duration: '3ヶ月',
      rating: 5,
      tags: ['女性エンジニア', 'フルスタック', 'キャリアチェンジ', '事務職から'],
      summary: '事務職の将来性に不安を感じ、エンジニアへキャリアチェンジ。',
      fullStory: [
        '新卒で入社した会社で4年間事務職として働いていました。仕事は安定していましたが、単調な作業の繰り返しで成長を感じられず、このままでいいのか悩んでいました。',
        'AIに仕事を奪われるという話を聞いて、手に職をつけたいと強く思うようになりました。でも、文系出身の私にプログラミングなんてできるのか不安でした。',
        'OffshoreFlowを選んだ理由は、女性の卒業生が多かったから。実際に女性エンジニアとして活躍している先輩の話を聞いて、私にもできるかもしれないと思えました。',
        '学習中は仕事と両立するのが大変でした。朝5時に起きて勉強し、昼休みも勉強、帰宅後も勉強。でも、新しいことを学ぶのは久しぶりで、むしろ楽しかったです。',
        'フロントエンドだけでなく、バックエンドも学べたのが良かったです。全体像が見えることで、より深い理解ができました。特にデータベース設計は、事務職での経験が活きました。',
        '海外エンジニアとの協業は最高の経験でした。最初は英語に自信がなかったけど、技術の話なら意外と通じます。今では英語でのコミュニケーションも楽しんでいます。',
        '転職活動では、女性エンジニアを積極的に採用している企業を中心に受けました。フルスタックエンジニアとしてのスキルが評価され、想像以上の好条件で転職できました。',
        '今の会社は女性エンジニアも多く、とても働きやすい環境です。リモートワークも自由で、ライフワークバランスも大幅に改善しました。',
      ],
      quote:
        '女性でも全然関係ない！むしろ女性エンジニアは重宝されるし、働きやすい環境が多い。事務職時代より圧倒的に充実してる。',
      keyPoints: [
        '事務経験を活かした要件定義力',
        '英語力を活かして海外チームと協業',
        'フロントもバックも担当',
        'リモートワーク実現',
        'ワークライフバランス改善',
      ],
      timeline: [
        {
          week: 1,
          title: '仕事と両立しながら学習開始',
          description: '朝活・昼活・夜活で1日4時間確保。最初は体力的にきつかった。',
        },
        {
          week: 5,
          title: 'フルスタック学習',
          description: 'フロントエンドとバックエンドの両方を学習。全体像が見えてきた。',
        },
        {
          week: 9,
          title: '海外チームと協業',
          description: '英語でのコミュニケーションに挑戦。技術用語は万国共通！',
        },
        {
          week: 11,
          title: '女性エンジニア向け企業を中心に応募',
          description: 'ダイバーシティを重視する企業を選定。好反応多数。',
        },
        {
          week: 12,
          title: 'メガベンチャーに転職成功',
          description: '年収300万円アップ！リモートワークも実現。',
        },
      ],
      skills: ['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
      advice:
        '女性だからこそエンジニアはおすすめ！リモートワークで働きやすいし、実力で評価される世界。文系でも全然大丈夫。一緒に頑張りましょう！',
    },
  };

  const story = successStories[id as string];

  if (!story) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ストーリーが見つかりません</h1>
          <Link href="/success-stories" className="text-purple-400 hover:text-purple-300">
            成功事例一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{story.name}さんの成功事例 - OffshoreFlow</title>
        <meta
          name="description"
          content={`${story.previousJob}から${story.currentJob}へ転職成功。${story.name}さんの詳しいストーリー。`}
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

        {/* Breadcrumb */}
        <section className="pt-20 pb-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-purple-400 transition-colors">
                ホーム
              </Link>
              <span>/</span>
              <Link href="/success-stories" className="hover:text-purple-400 transition-colors">
                成功事例
              </Link>
              <span>/</span>
              <span className="text-white">{story.name}さん</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              {/* Profile Header */}
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 mb-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-4xl font-bold flex-shrink-0">
                    {story.avatar}
                  </div>

                  <div className="flex-grow">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      {story.name}さん（{story.age}歳）の成功ストーリー
                    </h1>
                    <p className="text-xl text-gray-300 mb-4">{story.summary}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">転職前</p>
                        <p className="font-semibold">{story.previousJob}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">転職後</p>
                        <p className="font-semibold text-purple-400">{story.currentJob}</p>
                        <p className="text-sm text-gray-300">{story.company}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">年収</p>
                        <p className="font-semibold text-green-400">{story.salary}</p>
                        <p className="text-sm text-green-400">{story.salaryIncrease}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating and Tags */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-400">5.0</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  詳しいストーリー
                </span>
              </h2>

              <div className="bg-gray-900/50 rounded-3xl p-8 space-y-6">
                {story.fullStory.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 border border-purple-500/30">
                <FaQuoteLeft className="text-3xl text-purple-400 mb-4" />
                <p className="text-xl italic text-gray-300 mb-4">{story.quote}</p>
                <p className="text-right text-gray-400">- {story.name}さん</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  3ヶ月の軌跡
                </span>
              </h2>

              <div className="space-y-6">
                {story.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold">
                        W{item.week}
                      </div>
                    </div>
                    <div className="flex-grow bg-gray-800 rounded-2xl p-6 border border-gray-700">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Points & Skills */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-3xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-400" />
                  成功のポイント
                </h3>
                <ul className="space-y-3">
                  {story.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-3xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FaCode className="text-purple-400" />
                  習得したスキル
                </h3>
                <div className="flex flex-wrap gap-2">
                  {story.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 px-4 py-2 rounded-full text-sm border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advice */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  後輩へのアドバイス
                </span>
              </h2>

              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <FaUsers className="text-4xl text-purple-400 mb-4 mx-auto" />
                <p className="text-xl text-gray-300 leading-relaxed">{story.advice}</p>
              </div>
            </motion.div>
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
                {story.name}さんのように
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  人生を変えませんか？
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                3ヶ月後、あなたも新しいキャリアを
                <br />
                スタートできます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
                >
                  無料カウンセリングを予約
                  <FaRocket />
                </motion.a>
                <Link
                  href="/success-stories"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <FaArrowLeft />
                  他の成功事例を見る
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SuccessStoryDetailPage;
