import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,700&display=optional" rel="stylesheet" />
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
