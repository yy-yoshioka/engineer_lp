/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://offshoreflow.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,

  // 除外するページ
  exclude: ['/api/*', '/admin/*', '/404', '/500', '/_error', '/_document', '/_app'],

  // robots.txtの設定
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: ['https://offshoreflow.com/sitemap.xml'],
  },

  // カスタム変換
  transform: async (config, path) => {
    // ブログページの優先度を上げる
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // サービスページの優先度を上げる
    if (path.startsWith('/services/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // トップページの優先度を最高に
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // デフォルト設定
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
