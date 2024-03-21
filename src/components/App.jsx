// import { lazy } from 'react';

import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main/Main';

// const HomePage = lazy(() => import('pages/HomePage'));
// const CatalogPage = lazy(() => import("pages/CatalogPage"));

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Main />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
