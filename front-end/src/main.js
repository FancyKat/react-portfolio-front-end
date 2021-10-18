import React from 'react';
import Header from './components/Header'
// import App from './app'
import Section from './components/Section'
import Footer from './components/Footer'
// import { BrowserRouter } from 'react-router-dom'

const Main = () => {
    return (
      <React.StrictMode>
        {/* <BrowserRouter> */}
          <Header />
          <Section />
          <Footer />
        {/* </BrowserRouter> */}
      </React.StrictMode> 
    );
}

export default Main