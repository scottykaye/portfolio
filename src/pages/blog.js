import App from '../components/App';
import Article from '../components/Article';
import Heading from '../components/Heading';
import CardsContainer from '../components/CardsContainer';
import Cards from '../components/Cards';

export default function Blog() {
  return (
    <App>
      <Heading>Welcome to my blog,</Heading>
      <p>Here I will post my perspective on my engineering thoughts on daily challenges I am working on and solving.</p>

      <CardsContainer>

        {[...Array(7).keys()].map((item) => (
          <Cards key={item}>
            <Article title="Keyboard Shortcuts" caption="by ScottyKaye">
              If you know me, you know I am a huge proponent of keyboard shortcuts and simple workflows. I've compiled some simple
              <table><tr><td>test</td></tr></table>
            </Article>
          </Cards>
        ))}
      </CardsContainer>
    </App>
  );
}
