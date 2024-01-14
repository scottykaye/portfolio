import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="scottykaye favicon" href="/static/favicon.ico" />
        <meta name="color-scheme" content="light dark" />
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
