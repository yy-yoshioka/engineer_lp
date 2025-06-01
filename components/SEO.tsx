import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = 'OffshoreFlow - 未経験からエンジニアへ',
  description = '未経験から3ヶ月でエンジニア転職を実現。実践的なプログラミング学習とキャリアサポートで、あなたの人生を変えるお手伝いをします。',
  keywords = [
    'プログラミング学習',
    'エンジニア転職',
    '未経験',
    'オンライン学習',
    'キャリアチェンジ',
  ],
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  structuredData,
  article,
}: SEOProps) => {
  const siteName = 'OffshoreFlow';
  const baseUrl = 'https://offshoreflow.com';
  const fullTitle = title.includes('OffshoreFlow') ? title : `${title} - ${siteName}`;
  const fullCanonicalUrl = canonicalUrl || baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Head>
      {/* 基本的なメタタグ */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* viewport設定 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* OGP (Open Graph Protocol) */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@offshoreflow" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* 記事固有のメタタグ */}
      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags &&
            article.tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}
        </>
      )}

      {/* ファビコン */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* その他のメタタグ */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />

      {/* 構造化データ */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEO;
