import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
        </main>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
