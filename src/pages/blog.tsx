import App from '../components/App';
import Article from '../components/Article';
import Heading from '../components/Heading';
import AutoGrid from '../components/AutoGrid';
import Card from '../components/Card';

export default function Blog() {
  return (
    <App>
      <Heading>Hey, I'm Scott</Heading>
      <p>Here I will post my perspective on my engineering thoughts on daily challenges I am working on and solving.</p>

      <AutoGrid>
        <Card>
          <Article title="Keyboard Shortcuts" caption="by ScottyKaye">
            If you know me, you know I am a huge proponent of keyboard shortcuts and simple workflows. I've compiled some simple
            <table><tbody><tr><td>test</td></tr></tbody></table>
          </Article>
        </Card>
      </AutoGrid>
    </App>
  );
}
