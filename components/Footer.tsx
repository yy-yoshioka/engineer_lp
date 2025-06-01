import React from 'react';
import Link from 'next/link';
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'サービス',
      links: [
        { href: '/services/practical-development', label: '実践的な開発学習' },
        { href: '/services/global-experience', label: 'グローバル開発体験' },
        { href: '/services/career-support', label: '転職サポート' },
        { href: '/pricing-consultation', label: '料金プラン相談' },
      ],
    },
    {
      title: 'サポート',
      links: [
        { href: '/faq', label: 'よくある質問' },
        { href: '/schedule-examples', label: '学習スケジュール例' },
        { href: '/demo-video', label: 'デモ動画' },
        { href: '/career-success', label: '転職実績' },
        { href: '/community-events', label: 'コミュニティ・イベント' },
        { href: '/comparison', label: '他社比較' },
      ],
    },
    {
      title: '会社情報',
      links: [
        { href: '/company', label: '会社概要' },
        { href: '/blog', label: 'ブログ' },
        { href: '/contact', label: 'お問い合わせ' },
        { href: '/download-guide', label: '無料ガイドブック' },
      ],
    },
    {
      title: '法的情報',
      links: [
        { href: '/terms', label: '利用規約' },
        { href: '/privacy', label: 'プライバシーポリシー' },
        { href: '/sitemap', label: 'サイトマップ' },
      ],
    },
  ];

  const socialLinks = [
    { href: 'https://twitter.com/offshoreflow', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://discord.gg/offshoreflow', icon: FaDiscord, label: 'Discord' },
    { href: 'https://github.com/offshoreflow', icon: FaGithub, label: 'GitHub' },
    { href: 'https://youtube.com/@offshoreflow', icon: FaYoutube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline-block mb-4"
            >
              OffshoreFlow
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              3ヶ月で人生を変える
              <br />
              実践型エンジニア育成プログラム
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>東京都渋谷区神宮前1-2-3</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-purple-400" />
              <span>03-1234-5678</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-purple-400" />
              <a href="mailto:info@offshoreflow.com" className="hover:text-white transition-colors">
                info@offshoreflow.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2024 OffshoreFlow Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
