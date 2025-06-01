import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaShieldAlt, FaLock, FaUser, FaDatabase, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const PrivacyPage = () => {
  const sections = [
    {
      title: '個人情報の定義',
      content: `個人情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む。）を指します。`,
    },
    {
      title: '個人情報の収集',
      content: `当社は、以下の場合に個人情報を収集することがあります：
      
• お問い合わせフォームからのお問い合わせ時
• 無料カウンセリングのお申し込み時
• 受講申し込み時
• その他、サービス利用時に必要な場合`,
    },
    {
      title: '個人情報の利用目的',
      content: `当社は、収集した個人情報を以下の目的で利用いたします：

• サービスの提供・運営のため
• お客様からのお問い合わせに回答するため
• メンテナンス、重要なお知らせなど必要に応じたご連絡のため
• 利用規約に違反したお客様や、不正・不当な目的でサービスを利用しようとするお客様の特定をし、ご利用をお断りするため
• お客様にご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため
• 上記の利用目的に付随する目的`,
    },
    {
      title: '個人情報の第三者提供',
      content: `当社は、次に掲げる場合を除いて、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません：

• 法令に基づく場合
• 人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
• 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがあるとき`,
    },
    {
      title: '個人情報の開示',
      content: `当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します：

• 本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
• 当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合
• その他法令に違反することとなる場合`,
    },
    {
      title: '個人情報の訂正および削除',
      content: `お客様は、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。当社は、お客様から前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。`,
    },
    {
      title: '個人情報の利用停止等',
      content: `当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。`,
    },
    {
      title: 'プライバシーポリシーの変更',
      content: `本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、お客様に通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。`,
    },
    {
      title: 'お問い合わせ窓口',
      content: `本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。

メールアドレス: privacy@offshoreflow.com
電話番号: 03-XXXX-XXXX
受付時間: 平日 10:00-18:00`,
    },
  ];

  return (
    <>
      <Head>
        <title>プライバシーポリシー - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowのプライバシーポリシー。個人情報の取り扱いについて詳しく説明しています。"
        />
      </Head>

      {/* Navigation */}
      <Navigation />

      <main className="min-h-screen bg-black text-white pt-16">
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
                <FaShieldAlt className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                プライバシー
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  ポリシー
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                株式会社OffshoreFlow（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、
                ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaLock className="text-3xl text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">安全な管理</h3>
                <p className="text-sm text-gray-400">適切なセキュリティ対策を実施</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaUser className="text-3xl text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">権利の尊重</h3>
                <p className="text-sm text-gray-400">お客様の権利を尊重します</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaDatabase className="text-3xl text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">適切な利用</h3>
                <p className="text-sm text-gray-400">目的に沿った利用のみ</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaEnvelope className="text-3xl text-pink-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">透明性</h3>
                <p className="text-sm text-gray-400">情報の取り扱いを明確に</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-900/50 rounded-2xl p-8 mb-8"
              >
                <p className="text-gray-300">
                  制定日：2024年1月1日
                  <br />
                  最終改訂日：2024年3月1日
                </p>
              </motion.div>

              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="bg-gray-900/30 rounded-xl p-6">
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">ご質問・ご不明点がございましたら</h2>
              <p className="text-xl text-gray-300 mb-8">
                プライバシーポリシーに関するお問い合わせは
                <br />
                お気軽にご連絡ください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                >
                  お問い合わせ
                  <FaArrowRight />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-all"
                >
                  トップページへ戻る
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPage;
