import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/produtos' component={ProductsPage} />
        <Route exact path='/contato' component={ContactPage} />
        <Route exact path='/sobre-nos' component={AboutPage} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
