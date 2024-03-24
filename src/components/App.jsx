import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import About from 'components/About';
import Arts from 'components/Arts';
import Contacts from 'components/Contacts';
import FAQ from 'components/FAQ';
import Hero from 'components/Hero';
import MindMap from 'components/MindMap';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <About />
          <MindMap />
          <FAQ />
          <Arts />
          <Contacts />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
