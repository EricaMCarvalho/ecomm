import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='header'>
    <Navigation />

    <div className='header__logo-box'>
      <Link to='/'>
          <img
            src='/images/roma-text.png'
            alt='Roma'
            width='175'
            height='60'
            className='logo-image'
          />
      </Link>
    </div>
    <a href='/sacola'>
      <div className='header__button header__button--left'>
        <i className='header__icon fas fa-shopping-bag'></i>
      </div>
    </a>
  </header>
  )
}

export default Header
