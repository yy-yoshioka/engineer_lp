import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const router = useRouter();

  // パスから自動的にパンくずを生成
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;

    const pathSegments = router.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // パスとラベルのマッピング
    const pathLabelMap: { [key: string]: string } = {
      services: 'サービス',
      'practical-development': '実践的な開発学習',
      'global-experience': 'グローバル開発体験',
      'career-support': '転職サポート',
      faq: 'よくある質問',
      blog: 'ブログ',
      company: '会社情報',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      contact: 'お問い合わせ',
      'pricing-consultation': '料金プラン相談',
      'schedule-examples': '学習スケジュール例',
      'demo-video': 'デモ動画',
      'career-success': '転職実績',
      'community-events': 'コミュニティ・イベント',
      comparison: '他社比較',
      'success-stories': '成功事例',
      curriculum: 'カリキュラム',
      'download-guide': 'ガイドブック',
    };

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathLabelMap[segment] || segment;

      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  // 構造化データの生成
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://offshoreflow.com'}/`,
      },
      ...breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href
          ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://offshoreflow.com'}${item.href}`
          : undefined,
      })),
    ].filter((item) => item.item), // itemがundefinedのものを除外
  };

  if (breadcrumbItems.length === 0) return null;

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* パンくずリストUI */}
      <nav aria-label="パンくずリスト" className={`py-4 ${className}`}>
        <motion.ol
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center flex-wrap gap-2 text-sm"
        >
          {/* ホーム */}
          <li className="flex items-center">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <FaHome className="text-xs" />
              <span>ホーム</span>
            </Link>
          </li>

          {/* セパレーター */}
          <li className="text-gray-600">
            <FaChevronRight className="text-xs" />
          </li>

          {/* パンくずアイテム */}
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </li>
              {index < breadcrumbItems.length - 1 && (
                <li className="text-gray-600">
                  <FaChevronRight className="text-xs" />
                </li>
              )}
            </React.Fragment>
          ))}
        </motion.ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
