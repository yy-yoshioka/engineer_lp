import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/services/practical-development', label: 'プログラム' },
    { href: '/faq', label: 'よくある質問' },
    { href: '/blog', label: 'ブログ' },
    { href: '/company', label: '会社情報' },
  ];

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 現在のパスと一致するかチェック
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return router.pathname === href;
    }
    return router.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 py-2'
          : 'bg-black/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transition-transform"
          >
            OffshoreFlow
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors ${
                  isActiveLink(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActiveLink(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              無料カウンセリング
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-800 mt-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    isActiveLink(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                無料カウンセリング
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
