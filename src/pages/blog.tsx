import App from '../components/App';
import Article from '../components/Article';
import Heading from '../components/Heading';
import AutoGrid from '../components/AutoGrid';
import Cards from '../components/Cards';

export default function Blog() {
  return (
    <App>
      <Heading>Welcome to my blog,</Heading>
      <p>Here I will post my perspective on my engineering thoughts on daily challenges I am working on and solving.</p>

      <AutoGrid>
        {[...Array(7).keys()].map((item) => (
          <Cards key={item}>
            <Article title="Keyboard Shortcuts" caption="by ScottyKaye">
              If you know me, you know I am a huge proponent of keyboard shortcuts and simple workflows. I've compiled some simple
              <table><tbody><tr><td>test</td></tr></tbody></table>
            </Article>
          </Cards>
        ))}
      </AutoGrid>
    </App>
  );
}
