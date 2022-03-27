import SiteContainer from '../components/SiteContainer/';
import Header from '../components/Header/';
import MainContent from '../components/MainContent/';
import Footer from '../components/Footer/';

export default function Home() {
  return (
    <SiteContainer>
      <Header>Header</Header>
      <MainContent>Test</MainContent>
      <Footer>Footer</Footer>
    </SiteContainer>
  );
}
