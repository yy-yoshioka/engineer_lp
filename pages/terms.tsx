import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaFileContract,
  FaCheckCircle,
  FaUserCheck,
  FaBan,
  FaExclamationTriangle,
  FaArrowRight,
} from 'react-icons/fa';

const TermsPage = () => {
  const sections = [
    {
      title: '第1条（適用）',
      content: `1. 本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
2. 当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
3. 本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。`,
    },
    {
      title: '第2条（利用登録）',
      content: `1. 本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
2. 当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
(1) 利用登録の申請に際して虚偽の事項を届け出た場合
(2) 本規約に違反したことがある者からの申請である場合
(3) その他、当社が利用登録を相当でないと判断した場合`,
    },
    {
      title: '第3条（ユーザーIDおよびパスワードの管理）',
      content: `1. ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
2. ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。
3. ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当社に故意又は重大な過失がある場合を除き、当社は一切の責任を負わないものとします。`,
    },
    {
      title: '第4条（利用料金および支払方法）',
      content: `1. ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。
2. ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14.6％の割合による遅延損害金を支払うものとします。`,
    },
    {
      title: '第5条（禁止事項）',
      content: `ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。

(1) 法令または公序良俗に違反する行為
(2) 犯罪行為に関連する行為
(3) 本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
(4) 当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
(5) 本サービスによって得られた情報を商業的に利用する行為
(6) 当社のサービスの運営を妨害するおそれのある行為
(7) 不正アクセスをし、またはこれを試みる行為
(8) 他のユーザーに関する個人情報等を収集または蓄積する行為
(9) 不正な目的を持って本サービスを利用する行為
(10) 本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
(11) 他のユーザーに成りすます行為
(12) 当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
(13) 当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
(14) その他、当社が不適切と判断する行為`,
    },
    {
      title: '第6条（本サービスの提供の停止等）',
      content: `1. 当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
(1) 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
(2) 地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
(3) コンピュータまたは通信回線等が事故により停止した場合
(4) その他、当社が本サービスの提供が困難と判断した場合
2. 当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。`,
    },
    {
      title: '第7条（利用制限および登録抹消）',
      content: `1. 当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
(1) 本規約のいずれかの条項に違反した場合
(2) 登録事項に虚偽の事実があることが判明した場合
(3) 料金等の支払債務の不履行があった場合
(4) 当社からの連絡に対し、一定期間返答がない場合
(5) 本サービスについて、最終の利用から一定期間利用がない場合
(6) その他、当社が本サービスの利用を適当でないと判断した場合
2. 当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。`,
    },
    {
      title: '第8条（退会）',
      content: `ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。`,
    },
    {
      title: '第9条（保証の否認および免責事項）',
      content: `1. 当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
2. 当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
3. 前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
4. 当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。`,
    },
    {
      title: '第10条（サービス内容の変更等）',
      content: `当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。`,
    },
    {
      title: '第11条（利用規約の変更）',
      content: `当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。`,
    },
    {
      title: '第12条（個人情報の取扱い）',
      content: `当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。`,
    },
    {
      title: '第13条（通知または連絡）',
      content: `ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。`,
    },
    {
      title: '第14条（権利義務の譲渡の禁止）',
      content: `ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。`,
    },
    {
      title: '第15条（準拠法・裁判管轄）',
      content: `1. 本規約の解釈にあたっては、日本法を準拠法とします。
2. 本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。`,
    },
  ];

  return (
    <>
      <Head>
        <title>利用規約 - OffshoreFlow</title>
        <meta
          name="description"
          content="OffshoreFlowの利用規約。サービスのご利用にあたっての規定を詳しく説明しています。"
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6">
                <FaFileContract className="text-4xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                利用
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
                  規約
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                この利用規約（以下、「本規約」といいます。）は、株式会社OffshoreFlow（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
                登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Important Points */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaCheckCircle className="text-3xl text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">同意事項</h3>
                <p className="text-sm text-gray-400">ご利用前に必ずご確認ください</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaUserCheck className="text-3xl text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">利用条件</h3>
                <p className="text-sm text-gray-400">登録・利用の条件を明記</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaBan className="text-3xl text-red-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">禁止事項</h3>
                <p className="text-sm text-gray-400">守っていただくルール</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <FaExclamationTriangle className="text-3xl text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">免責事項</h3>
                <p className="text-sm text-gray-400">責任の範囲について</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
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
                  transition={{ delay: index * 0.05 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
                    {section.title}
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

        {/* Agreement Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">サービスのご利用について</h2>
              <p className="text-xl text-gray-300 mb-8">
                本規約に同意いただけない場合は、
                <br />
                本サービスをご利用いただくことができません
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
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
    </>
  );
};

export default TermsPage;
