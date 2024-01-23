import Head from 'next/head';
import Footer from '@/components/common/Footer';
import Header from '@/components//common/Header';
import Site from '@/components/common/Site';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Site>
      <Head>
        <title>CodeEdit</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta
          property="og:description"
          content="A lightweight, natively built editor. Open source. Free forever."
        ></meta>
        <meta
          property="og:title"
          content="CodeEdit – A native code editor for macOS"
        ></meta>
        <meta
          property="og:image"
          content="https://www.codeedit.app/social-preview.jpg"
        ></meta>
        <meta
          property="og:description"
          content="A lightweight, natively built editor. Open source. Free forever."
        ></meta>
        <meta property="og:url" content="https://www.codeedit.app"></meta>
        <meta
          name="twitter:image"
          content="https://www.codeedit.app/social-preview.jpg"
        ></meta>
        <meta
          name="twitter:image:src"
          content="https://www.codeedit.app/social-preview.jpg"
        ></meta>
        <meta
          name="twitter:card"
          content="https://www.codeedit.app/social-preview.jpg"
        ></meta>
        <meta name="twitter:site" content="@CodeEditApp"></meta>
        <meta name="twitter:creator" content="@CodeEditApp"></meta>
        <meta name="twitter:title" content="CodeEdit for macOS"></meta>
        <meta
          name="twitter:description"
          content="CodeEdit, a lightweight, natively built editor for macOS. Open source. Free forever."
        ></meta>
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
