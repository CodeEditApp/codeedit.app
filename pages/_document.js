import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
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
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@CodeEditApp"></meta>
          <meta name="twitter:creator" content="@CodeEditApp"></meta>
          <meta name="twitter:title" content="CodeEdit for macOS"></meta>
          <meta
            name="twitter:description"
            content="CodeEdit, a lightweight, natively built editor for macOS. Open source. Free forever."
          ></meta>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
