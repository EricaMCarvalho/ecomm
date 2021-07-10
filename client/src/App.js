import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='container'>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/produtos' component={ProductsPage} />
        <Route exact path='/produtos/:id' component={ProductDetailsPage} />
        <Route exact path='/contato' component={ContactPage} />
        <Route exact path='/sobre-nos' component={AboutPage} />
        <Route exact path='/cadastro' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
