import Footer from '@/components/common/Footer';
import Header from '@/components//common/Header';
import '@/styles/globals.css';
import Site from '@/components/common/Site';

function MyApp({ Component, pageProps }) {
  return (
    <Site>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Site>
  );
}

export default MyApp;
