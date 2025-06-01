import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">たった3か月でフルスタックへ!</h1>
          <p className="mb-8 text-lg md:text-xl">オフショア連携×最新技術でキャリアを加速</p>
          <a
            href="#cta"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200"
          >
            無料カジュアル面談に申し込む
          </a>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50" id="overview">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">
            OffshoreFlow Engineer Program とは？
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            フルスタック開発からAIチャット開発、海外チームとのコラボまで学べるオンラインコミュニティです。
            Slackと週1勉強会で講師陣がサポート、転職支援も行います。
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" id="benefits">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            3つのポイントで、あなたのキャリアが変わる
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">最先端技術を実践</h3>
              <p>React HooksからDocker、AWSまで幅広く習得。独学の2倍速で成長</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">転職成功実績80%</h3>
              <p>実案件に触れてスキル証明。プログラム修了後、約8割が希望企業へ内定</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">オフショアチームと共同開発</h3>
              <p>海外エンジニアとの英語コミュニケーションも習得。グローバル案件で差をつける</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50" id="curriculum">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">
            具体的にどんな学習・サポートがあるの？
          </h2>
          <ul className="max-w-2xl mx-auto list-disc list-inside space-y-2">
            <li>HTML/CSS/JavaScript + React 実装演習</li>
            <li>Node.js + Express + MySQL/MongoDB</li>
            <li>Docker, CI/CD, AWSデプロイ</li>
            <li>OpenAI API を使ったAIチャットBot作成</li>
            <li>ポートフォリオ添削や面接対策</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16" id="testimonials">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">卒業生のストーリー</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="mb-2 font-semibold">Aさん (25歳)</p>
              <p className="mb-4 text-sm text-gray-600">
                文系→IT初心者からReact + Node.jsで自作アプリを公開し、ベンチャー企業に内定
              </p>
              <p className="text-yellow-500">★★★★★</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="mb-2 font-semibold">Bさん (30歳)</p>
              <p className="mb-4 text-sm text-gray-600">
                社内SEからWeb系企業へ転職成功。スキルの幅が広がり年収UP
              </p>
              <p className="text-yellow-500">★★★★☆</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50" id="pricing">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">参加プラン & 料金</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">ライトプラン</h3>
              <p className="mb-4">月額X円</p>
              <p className="text-sm">週1メンタリング、Discordコミュニティ</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center border-2 border-blue-500">
              <h3 className="text-xl font-semibold mb-2">スタンダードプラン</h3>
              <p className="mb-4">月額Y円</p>
              <p className="text-sm">週1メンタリング + 個別転職相談 + 案件紹介</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">エキスパートプラン</h3>
              <p className="mb-4">月額Z円</p>
              <p className="text-sm">週2メンタリング + AI開発実践 + 英語コーチング</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" id="faq">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div>
              <p className="font-semibold">Q. プログラミング未経験ですが大丈夫？</p>
              <p className="text-sm text-gray-600">A. 基礎からサポートするので問題ありません。</p>
            </div>
            <div>
              <p className="font-semibold">Q. どれくらいの学習時間が必要？</p>
              <p className="text-sm text-gray-600">A. 週10〜15時間を目安に取り組む方が多いです。</p>
            </div>
            <div>
              <p className="font-semibold">Q. 転職先の斡旋はある？</p>
              <p className="text-sm text-gray-600">A. 提携企業をご紹介可能です。</p>
            </div>
            <div>
              <p className="font-semibold">Q. 海外エンジニアとのやり取りは英語が必要？</p>
              <p className="text-sm text-gray-600">A. 英語サポートがあるのでご安心ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white text-center" id="cta">
        <h2 className="text-3xl font-bold mb-4">あなたの一歩が、未来を変える</h2>
        <a
          href="#"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow hover:bg-gray-200"
        >
          カジュアル面談を予約する
        </a>
        <p className="mt-4 text-sm">今なら初回面談は完全無料。お気軽にご相談ください。</p>
      </section>
    </main>
  );
}
