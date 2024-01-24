import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta
          name="description"
          content="Scotty Kaye is a Frontend Software Engineer located in Boston, Massachusetts with a strong background in UI, React, Accessibility and Next.js"
        />
        <link
          rel="icon"
          href="/images/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <meta property="og:title" content="Scotty Kaye" />
        <meta property="og:image" content="/images/favicon.ico" />

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
