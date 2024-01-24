import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <link
          rel="icon"
          href="/icon/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <meta property="og:title" content="Example Page" />
        <meta property="og:image" content="/icon/favicon.ico" />
        <meta
          property="og:description"
          content="Scotty Kaye - Frontend Software Engineer"
        />
        <meta property="og:url" content="https://scottykaye.com/" />
        <meta
          name="twitter:card"
          content="Scotty Kaye - Frontend Software Engineer"
        />
        <noscript id="__next_css__DO_NOT_USE__"></noscript>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,700&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
