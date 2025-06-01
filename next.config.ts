import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1週間
  },

  // 圧縮有効化
  compress: true,

  // PWA設定（将来的に）
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
      {
        source: '/robots.txt',
        destination: '/robots.txt',
      },
    ];
  },

  // ヘッダー設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // 実験的機能（CSS最適化を無効化）
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
