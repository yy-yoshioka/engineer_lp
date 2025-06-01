# SEO対策実装ドキュメント

## 概要

OffshoreFlowエンジニア訓練プログラムのランディングページに包括的なSEO対策を実装しました。

## 実装内容

### 1. 基本的なSEO設定

#### メタタグ最適化

- `title`、`description`、`keywords`の設定
- OGP (Open Graph Protocol) 対応
- Twitter Card対応
- canonical URL設定
- robots設定

#### コンポーネント

- `components/SEO.tsx`: 再利用可能なSEOコンポーネント
- `lib/seo.ts`: SEO関連のユーティリティ関数

### 2. 構造化データ (JSON-LD)

以下の構造化データを実装：

#### Organization Schema

```typescript
{
  "@type": "Organization",
  "name": "OffshoreFlow",
  "description": "未経験からエンジニア転職を支援するプログラミング学習サービス",
  "url": "https://offshoreflow.com",
  // ... その他の組織情報
}
```

#### Website Schema

```typescript
{
  "@type": "WebSite",
  "name": "OffshoreFlow",
  "url": "https://offshoreflow.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://offshoreflow.com/search?q={search_term_string}"
  }
}
```

#### Article Schema (ブログ記事用)

- 記事のメタデータ
- 著者情報
- 公開日・更新日
- カテゴリー・タグ

#### その他

- Breadcrumb Schema (パンくずリスト)
- FAQ Schema (FAQ ページ用)
- Course Schema (コース情報用)

### 3. サイトマップ

#### 動的サイトマップ生成

- `pages/api/sitemap.xml.ts`: APIエンドポイント
- `next-sitemap.config.js`: next-sitemap設定
- ブログ記事の自動追加
- 優先度とchangefreqの設定

#### サイトマップ構成

- 静的ページ
- ブログ記事
- サービスページ
- 成功事例ページ

### 4. robots.txt

```
User-agent: *
Allow: /

# サイトマップの場所
Sitemap: https://offshoreflow.com/sitemap.xml

# 不要なページはクロール対象外
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
```

### 5. パフォーマンス最適化

#### Next.js設定 (`next.config.ts`)

- 画像最適化 (WebP/AVIF対応)
- 圧縮有効化
- キャッシュヘッダー設定
- セキュリティヘッダー

#### CSS最適化

- CSS最適化の実験的機能有効化
- 不要なCSSの除去

### 6. Google Analytics & Tag Manager

#### 実装ファイル

- `pages/_document.tsx`: スクリプトタグ
- `pages/_app.tsx`: ページビュー追跡

#### 機能

- ページビュー自動追跡
- ルート変更時の追跡
- プライバシー設定 (IP匿名化)

### 7. PWA準備

#### Web App Manifest (`public/site.webmanifest`)

```json
{
  "name": "OffshoreFlow - エンジニア転職支援",
  "short_name": "OffshoreFlow",
  "theme_color": "#8b5cf6",
  "background_color": "#000000",
  "display": "standalone"
}
```

## 使用方法

### SEOコンポーネントの使用

```tsx
import SEO from '../components/SEO';
import { generateArticleSchema } from '../lib/seo';

export default function MyPage() {
  const articleSchema = generateArticleSchema({
    headline: '記事タイトル',
    description: '記事の説明',
    author: '著者名',
    datePublished: '2024-01-01',
    image: '/images/article.jpg',
    url: 'https://offshoreflow.com/blog/article-slug',
    category: 'programming',
  });

  return (
    <>
      <SEO
        title="ページタイトル"
        description="ページの説明"
        keywords={['キーワード1', 'キーワード2']}
        ogImage="/images/og-image.jpg"
        structuredData={articleSchema}
      />
      {/* ページコンテンツ */}
    </>
  );
}
```

### 環境変数設定

`.env.local`ファイルを作成（`env.example`を参考）：

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# サイトURL
NEXT_PUBLIC_SITE_URL=https://offshoreflow.com
```

## ビルド・デプロイ

```bash
# サイトマップを含むビルド
yarn build

# サイトマップのみ生成
yarn next-sitemap
```

## SEOチェックリスト

### ✅ 実装済み

- [x] メタタグ最適化
- [x] OGP対応
- [x] Twitter Card対応
- [x] 構造化データ (JSON-LD)
- [x] サイトマップ自動生成
- [x] robots.txt
- [x] Google Analytics準備
- [x] パフォーマンス最適化
- [x] PWA準備

### 🔄 今後の改善点

- [ ] 実際のファビコン・OG画像作成
- [ ] Google Search Console設定
- [ ] ページ表示速度の最適化
- [ ] Core Web Vitals対応
- [ ] 内部リンク最適化
- [ ] alt属性の充実
- [ ] モバイルフレンドリー対応強化

## 測定・分析

### Google Analytics

- ページビュー
- ユーザー行動
- コンバージョン追跡

### Google Search Console

- 検索パフォーマンス
- インデックス状況
- エラー監視

### PageSpeed Insights

- パフォーマンススコア
- Core Web Vitals
- 改善提案

## 注意事項

1. **画像ファイル**: 実際のファビコンやOG画像は別途作成が必要
2. **Google Analytics**: 実際のGA IDの設定が必要
3. **ドメイン**: 本番環境では適切なドメインに変更
4. **コンテンツ**: 重複コンテンツの回避
5. **定期的な更新**: サイトマップやメタデータの更新

## 参考リンク

- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [Web.dev SEO](https://web.dev/seo/)
