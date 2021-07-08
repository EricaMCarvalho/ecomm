import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
