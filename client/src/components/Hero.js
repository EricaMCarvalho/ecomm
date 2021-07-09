import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='overlay-dark'>
        <div className='hero__content'>
          <div className='hero__content__image'>
            <img src='/images/logo-text.png' alt='Roma' />
          </div>
          <h2 className='heading-secondary lead'>Amor em forma de doce</h2>
          <div class='buttons'>
            <Link className='button button-primary' to='/produtos'>
              Conheça Nossos Produtos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
