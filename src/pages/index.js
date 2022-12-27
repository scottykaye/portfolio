import App from '../components/App';
import Link from '../components/Link';
import Heading from '../components/Heading';
// @TODO: To be used
// import Article from '../components/Article';

export default function Home() {
  return (
    <App>
      <header>
        <Heading>{`Hi, I'm Scott`}</Heading>
        {`I'm Scott Kaye a Frontend Software Engineer at`}
        {' '}
        <Link href="http://wayfair.com/" target="_blank" rel="noreferrer">Wayfair</Link>
        {' '}
        where I work on the Frontend Platform Team.
      </header>
      <section>
        Some Cards Here
        style a section
      </section>
    </App>
  );
}
