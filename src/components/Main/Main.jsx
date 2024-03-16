import About from 'components/About';
import Arts from 'components/Arts';
import Contacts from 'components/Contacts';
import FAQ from 'components/FAQ';
import Hero from 'components/Hero';
import MindMap from 'components/MindMap';

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <MindMap />
      <FAQ />
      <Arts />
      <Contacts />
    </>
  );
};

export default Main;
