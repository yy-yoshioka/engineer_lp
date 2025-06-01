import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaReact,
  FaRocket,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaDownload,
  FaPlay,
  FaCopy,
  FaGithub,
  FaYoutube,
  FaBookOpen,
  FaMobile,
  FaServer,
  FaUsers,
  FaBriefcase,
  FaDiscord,
} from 'react-icons/fa';

const ReactBasicsGuide = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('component');
  const [count, setCount] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({
    code,
    language = 'jsx',
    id,
  }: {
    code: string;
    language?: string;
    id: string;
  }) => (
    <div className="relative group">
      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-2 right-2 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100"
      >
        {copiedCode === id ? (
          <FaCheckCircle className="text-green-400" />
        ) : (
          <FaCopy className="text-gray-400" />
        )}
      </button>
    </div>
  );

  return (
    <>
      <Head>
        <title>React入門ガイド - OffshoreFlow</title>
        <meta
          name="description"
          content="初心者向けReact入門ガイド。基本概念から実践的なコード例まで、分かりやすく解説します。"
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
            <div className="flex items-center gap-4">
              <Link
                href="/download-guide"
                className="text-sm hover:text-purple-400 transition-colors"
              >
                完全版をダウンロード
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                無料相談
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20" />

          <div className="relative container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-purple-900/30 backdrop-blur px-4 py-2 rounded-full border border-purple-500/30 mb-6">
                <FaReact className="text-cyan-400 animate-spin-slow" />
                <span className="text-sm">初心者向け完全ガイド</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  React
                </span>
                <br />
                入門ガイド
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                これからReactを始める人のための完全ガイド。
                基本概念から実践的なコード例まで、分かりやすく解説します。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  <FaPlay />
                  今すぐ始める
                </motion.button>
                <motion.a
                  href="#why-react"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
                >
                  <FaBookOpen />
                  ガイドを読む
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is React */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  React
                </span>
                とは？
              </h2>

              <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 border border-gray-700">
                <p className="text-lg text-gray-300 mb-6">
                  ReactはFacebook（現Meta）が開発した
                  <span className="text-cyan-400 font-semibold">JavaScriptライブラリ</span>です。
                  ユーザーインターフェース（UI）を構築するために使われ、特に
                  <span className="text-cyan-400 font-semibold">
                    シングルページアプリケーション（SPA）
                  </span>
                  の開発に適しています。
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
                      <FaReact className="text-2xl" />
                    </div>
                    <h3 className="font-semibold mb-2">コンポーネントベース</h3>
                    <p className="text-sm text-gray-400">UIを小さな部品に分けて管理</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4">
                      <FaRocket className="text-2xl" />
                    </div>
                    <h3 className="font-semibold mb-2">高速な描画</h3>
                    <p className="text-sm text-gray-400">仮想DOMで効率的に更新</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4">
                      <FaUsers className="text-2xl" />
                    </div>
                    <h3 className="font-semibold mb-2">巨大なコミュニティ</h3>
                    <p className="text-sm text-gray-400">世界中の開発者が利用</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Learn React */}
        <section id="why-react" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                なぜ
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  React
                </span>
                を学ぶべきか？
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: FaBriefcase,
                  title: '求人数No.1',
                  desc: 'フロントエンドの求人で最も需要が高い技術',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: FaMobile,
                  title: 'React Native',
                  desc: '同じ知識でモバイルアプリも開発可能',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: FaServer,
                  title: 'Next.js',
                  desc: 'SSR/SSGにも対応した最新のWeb開発',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: FaLightbulb,
                  title: '学習しやすい',
                  desc: 'シンプルな概念で初心者でも理解しやすい',
                  color: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: FaUsers,
                  title: '豊富な情報',
                  desc: '日本語の教材やコミュニティが充実',
                  color: 'from-pink-500 to-red-500',
                },
                {
                  icon: FaRocket,
                  title: '開発効率UP',
                  desc: '再利用可能なコンポーネントで高速開発',
                  color: 'from-indigo-500 to-purple-500',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Basic Concepts */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Reactの
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  基本概念
                </span>
              </h2>
              <p className="text-xl text-gray-400">まずは3つの重要な概念を理解しよう</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Component */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">1.</span> コンポーネント（Component）
                </h3>
                <p className="text-gray-300 mb-4">
                  Reactアプリは「コンポーネント」という部品の組み合わせで作られます。
                  レゴブロックのように、小さな部品を組み合わせて大きなものを作るイメージです。
                </p>
                <CodeBlock
                  id="component-example"
                  code={`// シンプルなコンポーネントの例
function Welcome() {
  return <h1>こんにちは、React!</h1>;
}

// 使い方
<Welcome />`}
                />
              </motion.div>

              {/* JSX */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-purple-400">2.</span> JSX
                </h3>
                <p className="text-gray-300 mb-4">
                  JSXは、JavaScriptの中にHTMLのような記法を書ける拡張構文です。
                  見た目はHTMLに似ていますが、実はJavaScriptです。
                </p>
                <CodeBlock
                  id="jsx-example"
                  code={`// JSXの例
const element = (
  <div className="container">
    <h1>Hello, {name}!</h1>
    <p>現在時刻: {new Date().toLocaleTimeString()}</p>
  </div>
);`}
                />
              </motion.div>

              {/* State */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-orange-400">3.</span> State（状態）
                </h3>
                <p className="text-gray-300 mb-4">
                  Stateは、コンポーネントが持つ「状態」を表します。
                  ユーザーの操作やデータの変化に応じて、画面を更新するために使います。
                </p>
                <CodeBlock
                  id="state-example"
                  code={`// Stateの例
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                実際に
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  動かしてみよう
                </span>
              </h2>
              <p className="text-xl text-gray-400">インタラクティブなデモで理解を深めよう</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-700">
                  <button
                    onClick={() => setActiveTab('component')}
                    className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                      activeTab === 'component'
                        ? 'bg-gray-700 text-cyan-400'
                        : 'hover:bg-gray-700/50'
                    }`}
                  >
                    コンポーネント
                  </button>
                  <button
                    onClick={() => setActiveTab('state')}
                    className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                      activeTab === 'state' ? 'bg-gray-700 text-purple-400' : 'hover:bg-gray-700/50'
                    }`}
                  >
                    State
                  </button>
                  <button
                    onClick={() => setActiveTab('props')}
                    className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                      activeTab === 'props' ? 'bg-gray-700 text-orange-400' : 'hover:bg-gray-700/50'
                    }`}
                  >
                    Props
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  {activeTab === 'component' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">シンプルなコンポーネント</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-400 mb-2">コード:</p>
                          <CodeBlock
                            id="demo-component"
                            code={`function Greeting({ name = "ゲスト" }) {
  return (
    <div className="greeting">
      <h2>こんにちは、{name}さん！</h2>
      <p>Reactの世界へようこそ 🎉</p>
    </div>
  );
}`}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-2">実行結果:</p>
                          <div className="bg-gray-900 rounded-lg p-6">
                            <div className="greeting">
                              <h2 className="text-2xl font-bold mb-2">こんにちは、ゲストさん！</h2>
                              <p>Reactの世界へようこそ 🎉</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'state' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Stateを使ったカウンター</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-400 mb-2">コード:</p>
                          <CodeBlock
                            id="demo-state"
                            code={`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>カウント: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button onClick={() => setCount(0)}>
        リセット
      </button>
    </div>
  );
}`}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-2">実行結果:</p>
                          <div className="bg-gray-900 rounded-lg p-6">
                            <div className="counter text-center">
                              <h2 className="text-3xl font-bold mb-4">カウント: {count}</h2>
                              <div className="flex gap-2 justify-center">
                                <button
                                  onClick={() => setCount(count + 1)}
                                  className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded transition-colors"
                                >
                                  +1
                                </button>
                                <button
                                  onClick={() => setCount(count - 1)}
                                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
                                >
                                  -1
                                </button>
                                <button
                                  onClick={() => setCount(0)}
                                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
                                >
                                  リセット
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'props' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Propsでデータを渡す</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-400 mb-2">コード:</p>
                          <CodeBlock
                            id="demo-props"
                            code={`function UserCard({ name, role, level }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <div className="level">
        レベル: {level}
        <div className="progress-bar">
          <div style={{ width: \`\${level * 10}%\` }} />
        </div>
      </div>
    </div>
  );
}

// 使用例
<UserCard 
  name="田中太郎" 
  role="フロントエンドエンジニア" 
  level={7} 
/>`}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-2">実行結果:</p>
                          <div className="bg-gray-900 rounded-lg p-6">
                            <div className="user-card bg-gray-800 rounded-lg p-4">
                              <h3 className="text-xl font-bold">田中太郎</h3>
                              <p className="text-purple-400 mb-2">フロントエンドエンジニア</p>
                              <div className="level">
                                <p className="text-sm mb-1">レベル: 7</p>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                                    style={{ width: '70%' }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Setup */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                開発環境を
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  セットアップ
                </span>
              </h2>
              <p className="text-xl text-gray-400">たった5分で始められる！</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-600 rounded-full text-sm">
                      1
                    </span>
                    Node.jsをインストール
                  </h3>
                  <p className="text-gray-400 mb-4">
                    まずはNode.jsをインストールします。公式サイトから最新版をダウンロードしてください。
                  </p>
                  <a
                    href="https://nodejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    Node.js公式サイト <FaArrowRight />
                  </a>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-600 rounded-full text-sm">
                      2
                    </span>
                    Reactアプリを作成
                  </h3>
                  <p className="text-gray-400 mb-4">ターミナルで以下のコマンドを実行します：</p>
                  <CodeBlock
                    id="create-react-app"
                    language="bash"
                    code={`npx create-react-app my-first-react-app
cd my-first-react-app
npm start`}
                  />
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-600 rounded-full text-sm">
                      3
                    </span>
                    完成！
                  </h3>
                  <p className="text-gray-400">
                    ブラウザが自動的に開いて、Reactアプリが表示されます。
                    <span className="text-green-400 font-semibold">http://localhost:3000</span>{' '}
                    でアクセスできます。
                  </p>
                </motion.div>
              </div>

              {/* VS Code Extension */}
              <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-yellow-400" />
                  おすすめVS Code拡張機能
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• ES7+ React/Redux/React-Native snippets</li>
                  <li>• Prettier - Code formatter</li>
                  <li>• Auto Rename Tag</li>
                  <li>• Bracket Pair Colorizer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                次の
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                  ステップ
                </span>
              </h2>
              <p className="text-xl text-gray-400">Reactの基礎を学んだら、次はこれ！</p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Learning Path */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                >
                  <h3 className="text-2xl font-bold mb-6">学習ロードマップ</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'React Hooks', desc: 'useEffect, useContext等を学ぶ', done: false },
                      { title: '状態管理', desc: 'Redux, Zustand, Recoilなど', done: false },
                      { title: 'ルーティング', desc: 'React Routerでページ遷移', done: false },
                      { title: 'スタイリング', desc: 'CSS-in-JS, Tailwind CSS', done: false },
                      { title: 'Next.js', desc: 'SSR/SSGを使った本格開発', done: false },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 ${item.done ? 'bg-green-500 border-green-500' : 'border-gray-600'} flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          {item.done && <FaCheckCircle className="text-xs" />}
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                >
                  <h3 className="text-2xl font-bold mb-6">おすすめリソース</h3>
                  <div className="space-y-4">
                    <a
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
                    >
                      <FaReact className="text-2xl text-cyan-400" />
                      <div>
                        <h4 className="font-semibold">React公式ドキュメント</h4>
                        <p className="text-sm text-gray-400">最新の公式チュートリアル</p>
                      </div>
                      <FaArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a
                      href="https://github.com/offshoreflow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-purple-400 transition-colors group"
                    >
                      <FaGithub className="text-2xl" />
                      <div>
                        <h4 className="font-semibold">サンプルコード集</h4>
                        <p className="text-sm text-gray-400">実践的なコード例</p>
                      </div>
                      <FaArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a
                      href="https://youtube.com/@offshoreflow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-red-400 transition-colors group"
                    >
                      <FaYoutube className="text-2xl text-red-500" />
                      <div>
                        <h4 className="font-semibold">動画チュートリアル</h4>
                        <p className="text-sm text-gray-400">分かりやすい解説動画</p>
                      </div>
                      <FaArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 text-center border border-purple-500/30"
              >
                <h3 className="text-3xl font-bold mb-4">
                  本格的に
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    プロのエンジニア
                  </span>
                  を目指すなら
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  独学に限界を感じたら、OffshoreFlowで実践的なスキルを身につけよう。
                  海外エンジニアとの共同開発で、グローバルに活躍できるエンジニアへ！
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
                  >
                    無料カウンセリング予約
                    <FaRocket />
                  </motion.a>
                  <motion.a
                    href="/download-guide"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <FaDownload />
                    完全版ガイドをダウンロード
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gray-900/50 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/" className="hover:text-purple-400 transition-colors">
                ホーム
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/curriculum" className="hover:text-purple-400 transition-colors">
                カリキュラム
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/success-stories" className="hover:text-purple-400 transition-colors">
                成功事例
              </Link>
              <span className="text-gray-600">•</span>
              <a
                href="https://discord.gg/offshoreflow"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                <FaDiscord />
                コミュニティ
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .language-jsx,
        .language-bash {
          color: #e2e8f0;
          font-family: 'Fira Code', 'Consolas', monospace;
        }
      `}</style>
    </>
  );
};

export default ReactBasicsGuide;
