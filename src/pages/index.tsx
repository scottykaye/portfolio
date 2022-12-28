import App from '../components/App';
import Link from '../components/Link';
import Heading from '../components/Heading';
import Card from '../components/Card';
import Article from '../components/Article';

export default function Home() {
  return (
    <App>
      <header>
        <Heading>{`Hi, I'm Scott`} &#128075;</Heading>
        {`I'm a Frontend Software Engineer at`}{' '}
        <Link href="http://wayfair.com/" target="_blank" rel="noreferrer">
          Wayfair
        </Link>{' '}
        where I work on the Storefront Frontend Platform Team.
      </header>
      <Card>
        <Article title="NEXTJS portfolio update">
          <p>
            For 2023, I am planning to post my learnings & opinions as articles
            for frontend engineering. I plan on writing my takes on new
            technology as well as sharing my thoughts and patterns.
          </p>
          <p>
            This portfolio was designed using NEXT.JS and Styled with Vanilla
            Extract. I will be updating it to NEXT 13 the coming months.
          </p>
          <p>
            Stay tuned for more or find me on{' '}
            <Link
              href="https://twitter.com/scottykaye"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </Link>{' '}
            or{' '}
            <Link
              href="https://github.com/scottykaye"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
            .
          </p>
        </Article>
      </Card>
    </App>
  );
}
