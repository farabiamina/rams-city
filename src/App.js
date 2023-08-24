import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header/header";
import Banner from './components/banner/banner';
import Benefits from './components/benefits/benefits';
import Layouts from './components/layouts/layouts';
import Infrastructure from './components/infrastructure/infrastructure';
import Boulevard from './components/boulevard/boulevard';
import Gallery from './components/gallery/gallery';
import Purchase from './components/purchase/purchase';
import Panorama from './components/panorama/panorama';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import { AppContext } from './context/context';
import Success from './components/success/success';
import PageNotFround from './components/pageNotFound/pageNotFround';

function App() {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      setIs404(true);
    }
  }, [window.location.pathname]);

  const { successPage, toggleSuccessPage } = useContext(AppContext);
  if (is404) {
    return <PageNotFround />
  }
  if (successPage) {
    return <Success toggleSuccessPage={toggleSuccessPage} />
  }
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Benefits />
      <Layouts />
      <Infrastructure />
      <Boulevard />
      <Gallery />
      <Purchase />
      <Panorama />
      <Form />
      <Footer />
    </React.Fragment>
  );
}

export default App;
