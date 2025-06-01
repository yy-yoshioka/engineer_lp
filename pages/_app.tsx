// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Google Analytics tracking function
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // NProgressの設定
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
      minimum: 0.3,
    });

    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      NProgress.done();
    };

    // Google Analytics pageview tracking
    const handleRouteChange = (url: string) => {
      // Google Analytics がロードされている場合のみ実行
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <style jsx global>{`
        /* NProgress のカスタムスタイル */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: linear-gradient(90deg, #9333ea 0%, #ec4899 100%);
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          box-shadow:
            0 0 10px rgba(147, 51, 234, 0.7),
            0 0 5px rgba(236, 72, 153, 0.7);
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow:
            0 0 10px rgba(147, 51, 234, 0.7),
            0 0 5px rgba(236, 72, 153, 0.7);
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove spinner */
        #nprogress .spinner {
          display: none;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
