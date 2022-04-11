import App from '../components/App';
import Link from '../components/Link';
import Heading from '../components/Heading';
import Article from '../components/Article';

export default function Home() {
  return (
    <App>
      <Heading>Welcome</Heading>
      I'm Scott Kaye a Frontend Software Engineer at
      {' '}
      <Link href="http://wayfair.com/" target="_blank" rel="noreferrer">Wayfair</Link>
      {' '}
      where I currently work on their internal Design System Homebase.
    </App>
  );
}
