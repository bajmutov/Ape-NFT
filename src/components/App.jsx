import { lazy } from 'react';

import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main/Main';

// const HomePage = lazy(() => import('pages/HomePage'));
// const CatalogPage = lazy(() => import("pages/CatalogPage"));

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
