import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends NextDocument {
  render() {
    return (
      // ...
      <Html lang='en'>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7RYT3TBJ9Z"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7RYT3TBJ9Z', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </Html>
    );
  }
}