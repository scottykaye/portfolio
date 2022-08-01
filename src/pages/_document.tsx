import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html
      lang="en"
    >
      <Head>
        <meta name="color-scheme" content="light dark" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,700&display=optional" rel="stylesheet" />
      </Head>
      <Main />
      <NextScript />
    </Html>

  );
}
