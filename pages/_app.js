import { useEffect } from 'react';
import Head from 'next/head';
import Footer from '@/components/common/Footer';
import Header from '@/components//common/Header';
import Site from '@/components/common/Site';
import '@/styles/globals.css';
import { initGA, logPageView } from '@/utils/analytics';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', appHeight);

    appHeight();
  }, []);

  return (
    <Site>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>CodeEdit</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Site>
  );
}

export default MyApp;
