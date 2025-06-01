// 構造化データ生成関数
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OffshoreFlow',
    description: '未経験からエンジニア転職を支援するプログラミング学習サービス',
    url: 'https://offshoreflow.com',
    logo: 'https://offshoreflow.com/images/logo.png',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-XXX-XXXX-XXXX',
      contactType: 'customer service',
      availableLanguage: 'Japanese',
    },
    sameAs: [
      'https://twitter.com/offshoreflow',
      'https://github.com/offshoreflow',
      'https://linkedin.com/company/offshoreflow',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: '東京都',
    },
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OffshoreFlow',
    description: '未経験からエンジニア転職を支援するプログラミング学習サービス',
    url: 'https://offshoreflow.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://offshoreflow.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OffshoreFlow',
      logo: {
        '@type': 'ImageObject',
        url: 'https://offshoreflow.com/images/logo.png',
      },
    },
  };
};

export const generateCourseSchema = (course: {
  name: string;
  description: string;
  provider: string;
  url: string;
  price?: string;
  duration?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      url: 'https://offshoreflow.com',
    },
    url: course.url,
    ...(course.price && {
      offers: {
        '@type': 'Offer',
        price: course.price,
        priceCurrency: 'JPY',
      },
    }),
    ...(course.duration && {
      timeRequired: course.duration,
    }),
  };
};

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  category: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'OffshoreFlow',
      logo: {
        '@type': 'ImageObject',
        url: 'https://offshoreflow.com/images/logo.png',
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    articleSection: article.category,
    url: article.url,
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

// SEOメタデータ生成
export const generatePageMetadata = (page: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}) => {
  const baseUrl = 'https://offshoreflow.com';
  const fullUrl = `${baseUrl}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords || ['プログラミング学習', 'エンジニア転職', '未経験'],
    canonicalUrl: fullUrl,
    ogImage: page.ogImage || '/images/og-default.jpg',
  };
};

// サイトマップ生成用の静的ページリスト
export const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/services/practical-development', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/global-experience', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/career-support', priority: 0.8, changefreq: 'monthly' },
  { url: '/pricing-consultation', priority: 0.7, changefreq: 'monthly' },
  { url: '/schedule-examples', priority: 0.6, changefreq: 'monthly' },
  { url: '/demo-video', priority: 0.6, changefreq: 'monthly' },
  { url: '/career-success', priority: 0.7, changefreq: 'weekly' },
  { url: '/community-events', priority: 0.6, changefreq: 'weekly' },
  { url: '/comparison', priority: 0.6, changefreq: 'monthly' },
  { url: '/blog', priority: 0.8, changefreq: 'daily' },
  { url: '/faq', priority: 0.7, changefreq: 'monthly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/success-stories', priority: 0.7, changefreq: 'weekly' },
  { url: '/download-guide', priority: 0.6, changefreq: 'monthly' },
  { url: '/company', priority: 0.5, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/sitemap', priority: 0.4, changefreq: 'monthly' },
];
