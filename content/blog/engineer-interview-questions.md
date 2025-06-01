---
title: 'エンジニア面接でよく聞かれる技術質問TOP20'
date: '2024-03-03'
author: '田中次郎'
excerpt: '実際の面接で頻出する技術的な質問と、その回答例をまとめました。面接対策に必見の内容です。'
category: 'career'
tags: ['面接対策', '転職', 'キャリア', '技術面接']
thumbnail: '/images/blog/interview-questions.jpg'
featured: false
---

## はじめに

エンジニアの転職面接では、技術的な質問が必ず含まれます。しかし、どんな質問が来るのか分からず不安に感じる方も多いでしょう。

この記事では、実際の面接で頻出する技術質問TOP20と、その回答例を詳しく解説します。これらの質問に対する準備をしっかりと行えば、面接での自信につながるはずです。

## 基礎的な技術質問（TOP 1-5）

### 1. HTTPとHTTPSの違いを説明してください

**出題頻度**: ★★★★★

**回答例**:

```
HTTPとHTTPSの主な違いは、通信の暗号化にあります。

HTTP（HyperText Transfer Protocol）:
- 平文でデータを送信
- ポート番号80を使用
- 通信内容が第三者に見られる可能性がある

HTTPS（HTTP Secure）:
- SSL/TLS証明書により通信を暗号化
- ポート番号443を使用
- データの盗聴、改ざん、なりすましを防ぐ
- SEO的にも有利で、現在はHTTPSが標準

実装例として、HTTPSではSSL証明書の検証、暗号化・復号化の処理が
追加で行われるため、わずかにオーバーヘッドが発生しますが、
セキュリティの観点から必須となっています。
```

### 2. RESTful APIとは何か説明してください

**出題頻度**: ★★★★★

**回答例**:

```
RESTful APIは、REST（Representational State Transfer）の
設計原則に従って設計されたWeb APIです。

主な特徴：
1. リソース指向：URLでリソースを一意に識別
2. HTTPメソッドの適切な使用：
   - GET: リソースの取得
   - POST: リソースの作成
   - PUT: リソースの更新（全体）
   - PATCH: リソースの部分更新
   - DELETE: リソースの削除
3. ステートレス：各リクエストが独立
4. 統一インターフェース：一貫性のあるAPI設計

例：ユーザー管理API
- GET /users：全ユーザー取得
- GET /users/1：ID=1のユーザー取得
- POST /users：新規ユーザー作成
- PUT /users/1：ID=1のユーザー更新
- DELETE /users/1：ID=1のユーザー削除
```

### 3. GitとGitHubの違いは何ですか？

**出題頻度**: ★★★★☆

**回答例**:

```
Git：
- 分散型バージョン管理システム
- ローカル環境で動作
- コマンドラインやGUIツールで操作
- オープンソースソフトウェア

GitHub：
- Gitリポジトリのホスティングサービス
- Webブラウザからアクセス可能
- プルリクエスト、Issues、Actions等の追加機能
- コラボレーション機能（コードレビュー等）

関係性：
GitHubはGitの機能を拡張し、チーム開発を支援するプラットフォームです。
GitなしでGitHubは使えませんが、GitはGitHubなしでも使用可能です。
```

### 4. 同期処理と非同期処理の違いを説明してください

**出題頻度**: ★★★★★

**回答例**:

```javascript
// 同期処理
// 処理が順番に実行され、前の処理が完了するまで次に進まない
console.log('1番目');
const result = heavyCalculation(); // この処理が終わるまで待機
console.log('2番目');

// 非同期処理
// 処理を並行して実行でき、完了を待たずに次の処理に進める
console.log('1番目');
setTimeout(() => {
  console.log('3番目（1秒後）');
}, 1000);
console.log('2番目'); // すぐに実行される

// 実用例：API呼び出し
// 非同期処理（Promise/async-await）
async function fetchUserData() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('エラー:', error);
  }
}
```

### 5. データベースのインデックスとは何ですか？

**出題頻度**: ★★★★☆

**回答例**:

```sql
インデックスは、データベースの検索を高速化するためのデータ構造です。
本の索引のように、特定のデータを素早く見つけることができます。

メリット：
- SELECT文の実行速度向上
- ORDER BY、GROUP BYの高速化
- 一意性制約の実装

デメリット：
- 追加の記憶領域が必要
- INSERT、UPDATE、DELETEが遅くなる可能性
- メンテナンスコスト

使用例：
-- usersテーブルのemailカラムにインデックスを作成
CREATE INDEX idx_users_email ON users(email);

-- 複合インデックスの例
CREATE INDEX idx_users_name_age ON users(last_name, first_name, age);

適切な使用場面：
- WHERE句で頻繁に使用されるカラム
- JOINの結合条件
- 外部キー
```

## フロントエンド関連の質問（TOP 6-10）

### 6. Virtual DOMとは何ですか？なぜ使われるのですか？

**出題頻度**: ★★★★☆

**回答例**:

```javascript
Virtual DOMは、実際のDOMの軽量なJavaScriptオブジェクトによる表現です。
ReactやVue.jsなどのフレームワークで採用されています。

仕組み：
1. 状態が変更されると、新しいVirtual DOMツリーを作成
2. 前回のVirtual DOMツリーと比較（差分検出）
3. 変更された部分のみ実際のDOMに反映

利点：
- パフォーマンスの向上（最小限のDOM操作）
- バッチ処理による効率化
- 予測可能な更新処理

例：Reactでの動作
// 状態が変更されたとき
setState({ count: count + 1 });

// Virtual DOMで差分を計算
// 実際のDOMには必要な部分のみ更新
// <div>Count: 0</div> → <div>Count: 1</div>
// divの中身のテキストノードのみ更新される
```

### 7. CSSのFlexboxとGridの使い分けを説明してください

**出題頻度**: ★★★☆☆

**回答例**:

```css
Flexbox（一次元レイアウト）：
- 横または縦の一方向のレイアウトに適している
- コンテンツのサイズに基づく柔軟なレイアウト
- ナビゲーション、ボタングループ、カード内レイアウト

/* Flexboxの例 */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

Grid（二次元レイアウト）：
- 行と列の両方を同時に制御
- 複雑なレイアウトに適している
- ページ全体のレイアウト、ダッシュボード、ギャラリー

/* Gridの例 */
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr 300px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

使い分けの基準：
- 一方向の配置 → Flexbox
- 格子状の配置 → Grid
- 両方を組み合わせることも多い
```

### 8. JavaScriptのクロージャーについて説明してください

**出題頻度**: ★★★★☆

**回答例**:

```javascript
クロージャーは、内部関数が外部関数の変数にアクセスできる仕組みです。
関数とその関数が作られた環境の組み合わせです。

// 基本的な例
function outer(x) {
  // 外部関数の変数
  return function inner(y) {
    // 内部関数から外部関数の変数xにアクセス
    return x + y;
  };
}

const add5 = outer(5);
console.log(add5(3)); // 8

// 実用例：プライベート変数の実装
function createCounter() {
  let count = 0; // プライベート変数

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// count変数に直接アクセスはできない
```

### 9. CORSとは何ですか？どのように対処しますか？

**出題頻度**: ★★★★☆

**回答例**:

```javascript
CORS（Cross-Origin Resource Sharing）は、
異なるオリジン間でのリソース共有を制御するセキュリティ機能です。

オリジン = プロトコル + ドメイン + ポート番号
例：https://example.com:443

問題が発生する例：
- フロントエンド：http://localhost:3000
- API：http://localhost:8080
→ オリジンが異なるためCORSエラー

対処方法：

1. サーバー側での設定（Node.js/Express）
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

2. プロキシの使用（開発環境）
// package.json
"proxy": "http://localhost:8080"

3. サーバー側でヘッダーを追加
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
```

### 10. SPAとMPAの違いと、それぞれのメリット・デメリット

**出題頻度**: ★★★☆☆

**回答例**:

```
SPA（Single Page Application）:
- 単一のHTMLページで動作
- JavaScriptで動的にコンテンツを更新
- React、Vue、Angularなどで構築

メリット：
- 高速なページ遷移（画面の一部のみ更新）
- リッチなユーザー体験
- モバイルアプリライクな操作性

デメリット：
- 初期ロード時間が長い
- SEO対策が複雑（SSR/SSGが必要）
- JavaScriptが無効だと動作しない

MPA（Multi Page Application）:
- 複数のHTMLページで構成
- ページ遷移ごとにサーバーから新しいHTMLを取得

メリット：
- SEOに優れている
- 初期表示が速い
- JavaScriptなしでも基本機能が動作

デメリット：
- ページ遷移が遅い（全体を再読み込み）
- 状態管理が複雑
- サーバー負荷が高い

選択基準：
- コンテンツ中心のサイト → MPA
- アプリケーション的なサイト → SPA
- 両方の利点を活かす → Next.js、Nuxt.jsなどのフレームワーク
```

## バックエンド・データベース関連（TOP 11-15）

### 11. N+1問題とは何ですか？どう解決しますか？

**出題頻度**: ★★★★☆

**回答例**:

```ruby
N+1問題は、データベースクエリが非効率に実行される問題です。
1回のクエリで取得できるデータを、N+1回のクエリで取得してしまいます。

# 問題のあるコード例（Ruby on Rails）
# 1回目：全ユーザーを取得
users = User.all
# N回：各ユーザーの投稿を個別に取得
users.each do |user|
  puts user.posts.count  # ユーザーごとにクエリ発行
end

# 解決方法1：Eager Loading（includes）
users = User.includes(:posts)
users.each do |user|
  puts user.posts.count  # 追加クエリなし
end

# 解決方法2：JOINを使用
users = User.joins(:posts).group('users.id')
           .select('users.*, COUNT(posts.id) as posts_count')

# SQLでの例
-- N+1問題
SELECT * FROM users;
SELECT * FROM posts WHERE user_id = 1;
SELECT * FROM posts WHERE user_id = 2;
...

-- 解決後
SELECT users.*, posts.*
FROM users
LEFT JOIN posts ON posts.user_id = users.id;
```

### 12. トランザクションとACID特性について説明してください

**出題頻度**: ★★★★☆

**回答例**:

```sql
トランザクションは、データベースの一連の操作を
一つの処理単位としてまとめたものです。

ACID特性：

1. Atomicity（原子性）
   - すべて成功するか、すべて失敗するか
   - 中途半端な状態にならない

2. Consistency（一貫性）
   - データの整合性が保たれる
   - 制約違反の状態にならない

3. Isolation（独立性）
   - 同時実行されるトランザクションが干渉しない
   - 分離レベルで制御

4. Durability（永続性）
   - コミット後のデータは失われない
   - システム障害後も保持される

実装例：
BEGIN TRANSACTION;

-- 送金処理の例
UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;

-- すべて成功したらコミット
COMMIT;

-- エラーが発生したらロールバック
ROLLBACK;
```

### 13. 認証と認可の違いを説明してください

**出題頻度**: ★★★★☆

**回答例**:

```javascript
認証（Authentication）：
- 「誰であるか」を確認するプロセス
- ユーザーの身元確認
- 例：ログイン、パスワード確認、生体認証

認可（Authorization）：
- 「何ができるか」を確認するプロセス
- アクセス権限の確認
- 例：管理者権限、読み取り専用権限

実装例（Node.js/Express）：

// 認証ミドルウェア
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    res.status(401).json({ error: '認証が必要です' });
  }
};

// 認可ミドルウェア
const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: '権限がありません' });
    }
    next();
  };
};

// 使用例
app.get('/admin/users',
  authenticate,  // まず認証
  authorize(['admin']),  // 次に認可
  (req, res) => {
    // 管理者のみアクセス可能
  }
);
```

### 14. WebSocketとHTTPの違いは何ですか？

**出題頻度**: ★★★☆☆

**回答例**:

```javascript
HTTP：
- リクエスト/レスポンス型の通信
- 接続は一回きり（ステートレス）
- クライアントからのみ通信開始
- RESTful APIなど一般的なWeb通信

WebSocket：
- 双方向のリアルタイム通信
- 接続を維持（ステートフル）
- サーバーからもプッシュ通信可能
- チャット、リアルタイム更新など

実装例（Socket.io）：

// サーバー側
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('ユーザーが接続しました');

  // メッセージ受信
  socket.on('chat message', (msg) => {
    // 全クライアントに送信
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('ユーザーが切断しました');
  });
});

// クライアント側
const socket = io();

// メッセージ送信
socket.emit('chat message', 'Hello!');

// メッセージ受信
socket.on('chat message', (msg) => {
  console.log('受信:', msg);
});
```

### 15. キャッシュの種類と使い分けについて説明してください

**出題頻度**: ★★★☆☆

**回答例**:

```javascript
1. ブラウザキャッシュ
   - クライアント側で静的ファイルを保存
   - Cache-Controlヘッダーで制御

// Express.jsでの設定例
app.use(express.static('public', {
  maxAge: '1d',  // 1日間キャッシュ
  etag: true
}));

2. CDNキャッシュ
   - 地理的に分散したサーバーでコンテンツを配信
   - 画像、CSS、JSなどの静的ファイルに最適

3. アプリケーションキャッシュ（Redis/Memcached）
   - セッション情報、計算結果などを保存

// Redisの使用例
const redis = require('redis');
const client = redis.createClient();

// キャッシュの設定
await client.set('user:1', JSON.stringify(userData), 'EX', 3600);

// キャッシュの取得
const cachedData = await client.get('user:1');
if (cachedData) {
  return JSON.parse(cachedData);
}

4. データベースクエリキャッシュ
   - 頻繁に実行されるクエリ結果を保存
   - MySQLのクエリキャッシュなど

使い分けの基準：
- 更新頻度が低い → 長期キャッシュ
- ユーザー固有のデータ → セッションストレージ
- 全ユーザー共通 → CDN/アプリケーションキャッシュ
```

## 設計・アーキテクチャ関連（TOP 16-20）

### 16. マイクロサービスとモノリシックアーキテクチャの違い

**出題頻度**: ★★★☆☆

**回答例**:

```
モノリシックアーキテクチャ：
- すべての機能が1つのアプリケーションに統合
- 単一のコードベース、データベース

メリット：
- 開発が簡単（初期段階）
- デバッグが容易
- トランザクション管理が簡単

デメリット：
- スケーラビリティの制限
- 技術スタックの制約
- デプロイが大規模

マイクロサービスアーキテクチャ：
- 機能ごとに独立したサービスに分割
- 各サービスが独自のデータベースを持つ

メリット：
- 独立したスケーリング
- 技術スタックの自由度
- 障害の影響範囲が限定的

デメリット：
- 複雑性の増加
- ネットワーク遅延
- 分散トランザクションの難しさ

選択基準：
- 小規模/初期段階 → モノリシック
- 大規模/複数チーム → マイクロサービス
- 段階的な移行も可能
```

### 17. デザインパターンを3つ挙げて説明してください

**出題頻度**: ★★★☆☆

**回答例**:

```javascript
1. Singleton（シングルトン）
   - クラスのインスタンスを1つに制限
   - グローバルなアクセスポイントを提供

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
    this.connection = this.connect();
  }
}

2. Observer（オブザーバー）
   - 状態変化を複数のオブジェクトに通知
   - イベント駆動プログラミング

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }
}

3. Factory（ファクトリー）
   - オブジェクトの生成をカプセル化
   - 生成ロジックの変更が容易

class AnimalFactory {
  static createAnimal(type) {
    switch(type) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      default:
        throw new Error('Unknown animal type');
    }
  }
}
```

### 18. テスト駆動開発（TDD）について説明してください

**出題頻度**: ★★★☆☆

**回答例**:

```javascript
TDDは「テストファースト」の開発手法です。

サイクル（Red-Green-Refactor）：
1. Red: 失敗するテストを書く
2. Green: テストが通る最小限のコードを書く
3. Refactor: コードをリファクタリング

例：電卓機能の実装

// 1. Red - テストを先に書く
describe('Calculator', () => {
  it('should add two numbers', () => {
    const calc = new Calculator();
    expect(calc.add(2, 3)).toBe(5);
  });
});

// 2. Green - 最小限の実装
class Calculator {
  add(a, b) {
    return a + b;
  }
}

// 3. Refactor - 必要に応じて改善
class Calculator {
  add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

メリット：
- バグの早期発見
- リファクタリングの安全性
- 設計の改善
- ドキュメントとしての役割

デメリット：
- 初期の開発速度が遅い
- テストコードのメンテナンス
- 過度なテストは逆効果
```

### 19. CI/CDとは何ですか？

**出題頻度**: ★★★★☆

**回答例**:

```yaml
CI（Continuous Integration）継続的インテグレーション：
- コードの変更を頻繁にマージ
- 自動テストの実行
- ビルドの自動化

CD（Continuous Delivery/Deployment）：
- Continuous Delivery: 本番環境へのデプロイ準備を自動化
- Continuous Deployment: 本番環境への自動デプロイ

# GitHub Actions の例
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test
      - run: npm run lint

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v2
      - run: npm run build
      - run: npm run deploy

メリット：
- 早期のバグ発見
- デプロイの高速化
- 品質の向上
- チーム開発の効率化
```

### 20. セキュリティ対策で重要な3つのポイント

**出題頻度**: ★★★★☆

**回答例**:

```javascript
1. SQLインジェクション対策
   - プレースホルダーの使用

// 悪い例
const query = `SELECT * FROM users WHERE id = ${userId}`;

// 良い例（プレースホルダー）
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);

2. XSS（クロスサイトスクリプティング）対策
   - 出力時のエスケープ処理

// Reactでは自動的にエスケープされる
<div>{userInput}</div>

// 危険な例（dangerouslySetInnerHTML）
<div dangerouslySetInnerHTML={{__html: userInput}} />

// サニタイズライブラリの使用
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirty);

3. CSRF（クロスサイトリクエストフォージェリ）対策
   - CSRFトークンの使用

// Express.jsでの実装
const csrf = require('csurf');
app.use(csrf());

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

// フォームに含める
<input type="hidden" name="_csrf" value="<%= csrfToken %>">

その他の重要な対策：
- HTTPS の使用
- 適切な認証・認可
- 定期的なセキュリティアップデート
- ログの監視
```

## 面接での回答のコツ

### 1. 構造的に答える

- 定義 → 特徴 → 具体例 → メリット/デメリット

### 2. 実務経験を交える

- 「前職では○○の場面で使用しました」
- 「○○のプロジェクトで△△の問題を解決しました」

### 3. 分からない質問への対処

- 「申し訳ございません、その技術については詳しくありませんが、○○に似た概念でしょうか？」
- 「今は分かりませんが、必ず調べて理解します」

### 4. 逆質問の準備

- 「御社ではどのような技術スタックを使用していますか？」
- 「開発チームの体制について教えてください」
- 「技術的な課題や今後導入予定の技術はありますか？」

## まとめ

エンジニアの技術面接は、知識の深さと実践力の両方が問われます。この記事で紹介した質問は実際の面接で頻出するものばかりです。

重要なのは、単に答えを暗記するのではなく、**なぜそうなるのか**を理解することです。実際にコードを書いて動作を確認し、自分の言葉で説明できるようになることが大切です。

面接は一方的な試験ではなく、お互いを知るための対話です。自信を持って、あなたの技術への情熱と学習意欲を伝えてください。

頑張ってください！
