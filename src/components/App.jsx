import Header from './Header';
import Footer from './Footer';
import About from 'components/About';
import Arts from 'components/Arts';
import Contacts from 'components/Contacts';
import FAQ from 'components/FAQ';
import Hero from 'components/Hero';
import MindMap from 'components/MindMap';
import Main from './Main';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
        <MindMap />
        <FAQ />
        <Arts />
        <Contacts />
      </Main>
      <Footer />
    </>
  );
}

export default App;
