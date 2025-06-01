// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OffshoreFlow Engineer Program</title>
        <meta
          name="description"
          content="エンジニア転職やスキルアップ向けのコミュニティ・学習プログラムLP"
        />
      </Head>

      <main className="bg-gray-50 min-h-screen text-gray-800">
        {/* 1. ヒーローセクション */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  たった3か月でフルスタックへ！
                </h1>
                <p className="mb-6">
                  オフショア連携 × 最新技術でキャリアを加速。
                  あなたの“本気”をサポートするオンラインコミュニティ。
                </p>
                <a
                  href="#cta"
                  className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
                >
                  カジュアル面談を予約する
                </a>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img
                  src="/hero-illustration.png"
                  alt="Hero Visual"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. プログラム概要セクション */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              OffshoreFlow Engineer Program とは？
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              フルスタック開発やオフショア共同開発を体験しながら、実践的なスキルを身につけるオンラインコミュニティ。
              転職支援や英語力サポートも完備で、あなたの成長をトータルサポートします。
            </p>
          </div>
        </section>

        {/* 3. 参加メリット */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
              3つのポイントで、あなたのキャリアが変わる
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">最先端技術を実践</h4>
                <p>React HooksからDocker、AWSまで幅広く習得。独学の2倍速で成長！</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">転職成功実績80%</h4>
                <p>プログラム修了後、約8割が希望企業へ内定。実案件に触れてスキル証明。</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">海外チームと共同開発</h4>
                <p>オフショアエンジニアと連携、英語コミュ力を鍛えグローバルに活躍！</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. プログラム内容・カリキュラム */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
              具体的にどんな学習・サポートがあるの？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-2">学習モジュール例</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>基礎強化: HTML/CSS/JavaScript + React実装演習</li>
                  <li>バックエンド: Node.js + DB</li>
                  <li>DevOps: Docker, CI/CD, AWSデプロイ</li>
                  <li>AI PoC: OpenAI API を使ったチャットBot構築</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-2">サポート体制</h4>
                <p className="text-sm text-gray-700">
                  週1回のオンライン勉強会やメンターとの1on1面談、転職相談、案件紹介など
                  あなたの状況に合わせてバックアップします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 実績・受講者の声 */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">卒業生のストーリー</h3>
            <div className="space-y-8">
              {/* 受講者事例1 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <img src="/user1.png" alt="Aさん" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold">Aさん (25歳, 未経験→Webエンジニア)</p>
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  「全くの未経験でしたが、React+Nodeの実践演習で自作アプリを完成！
                  オンライン勉強会やメンタリングのおかげで挫折せずに転職成功できました。」
                </p>
              </div>

              {/* 受講者事例2 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <img src="/user2.png" alt="Bさん" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold">Bさん (30歳, 社内SE→Web系転職)</p>
                    <span className="text-yellow-400">★★★★☆</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  「オフショアエンジニアとの英語コミュニケーションも体験でき、転職先で
                  早速グローバルプロジェクトに配属。 前職より年収も大幅UPしました！」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 参加プラン・料金 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">参加プラン & 料金</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* プラン例1 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <h4 className="font-semibold text-lg mb-2">ライトプラン</h4>
                <p className="mb-4 text-gray-700">月額 9,800円</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>- 週1回勉強会</li>
                  <li>- Discordコミュニティ参加</li>
                  <li>- 転職サポート(メールのみ)</li>
                </ul>
                <a
                  href="#cta"
                  className="block text-center bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700"
                >
                  申し込む
                </a>
              </div>

              {/* プラン例2 */}
              <div className="bg-white p-6 rounded-lg shadow border relative">
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  人気No.1
                </span>
                <h4 className="font-semibold text-lg mb-2">スタンダード</h4>
                <p className="mb-4 text-gray-700">月額 19,800円</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>- 個別メンタリング(週1)</li>
                  <li>- 転職コンサル&企業紹介</li>
                  <li>- 実案件演習(小規模)</li>
                </ul>
                <a
                  href="#cta"
                  className="block text-center bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700"
                >
                  申し込む
                </a>
              </div>

              {/* プラン例3 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <h4 className="font-semibold text-lg mb-2">エキスパート</h4>
                <p className="mb-4 text-gray-700">月額 29,800円</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>- 個別メンタリング(週2)</li>
                  <li>- AIチャットPoC参加</li>
                  <li>- 英語コミュ力強化サポート</li>
                  <li>- 大規模案件での実務体験</li>
                </ul>
                <a
                  href="#cta"
                  className="block text-center bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700"
                >
                  申し込む
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">よくある質問</h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold">Q. 全くの未経験でも参加できますか？</p>
                <p className="text-sm text-gray-700 mt-1">
                  A. はい、初心者向けの基礎カリキュラムも用意しております。
                  週1のメンタリングでつまずきを防ぎます。
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold">Q. 仕事が忙しくても学習時間を確保できますか？</p>
                <p className="text-sm text-gray-700 mt-1">
                  A.
                  基本的に自習時間に合わせて柔軟に進められます。土日の勉強会もありますのでご安心ください。
                </p>
              </div>
              {/* 必要に応じて増やしてください */}
            </div>
          </div>
        </section>

        {/* 8. 最終CTA */}
        <section id="cta" className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">あなたの一歩が、未来を変える</h3>
            <p className="mb-6 text-gray-700">今なら初回面談は無料。お気軽にご相談ください。</p>
            <a
              href="/contact" // 実際の問い合わせフォームへのリンクなど
              className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-700 transition"
            >
              カジュアル面談を申し込む
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
