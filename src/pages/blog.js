import App from '../components/App';
import Article from '../components/Article';
import CardsContainer from '../components/CardsContainer';
import Cards from '../components/Cards';

export default function Blog() {
  return (
    <App>
      <CardsContainer>
        <Cards><Article title="Title" caption="by ScottyKaye">A Blog post</Article></Cards>
        <Cards><Article title="Title" caption="by ScottyKaye">A Blog post</Article></Cards>
        <Cards><Article title="Title" caption="by ScottyKaye">A Blog post</Article></Cards>
        <Cards><Article title="Title" caption="by ScottyKaye">A Blog post</Article></Cards>
      </CardsContainer>
    </App>
  );
}
