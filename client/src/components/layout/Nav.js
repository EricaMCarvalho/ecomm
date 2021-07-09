import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navigation__nav'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <Link to='/' className='navigation__link'>
            Página inicial
          </Link>
        </li>

        <li className='navigation__item'>
          <Link to='/produtos' className='navigation__link'>
            Nossos Produtos
          </Link>
        </li>

        <li className='navigation__item'>
          <Link to='/sobre-nos' className='navigation__link'>
            Sobre nós
          </Link>
        </li>

        <li className='navigation__item'>
          <Link to='/contato' className='navigation__link'>
            Fale Conosco
          </Link>
        </li>

        <li className='navigation__item'>
          <Link to='/sacola' className='navigation__link'>
            Sua sacola
          </Link>
        </li>

        <li className='navigation__item'>
          <Link to='/pedidos' className='navigation__link'>
            Seus pedidos
          </Link>
        </li>

        <li className='navigation__item'>
          <Link to='/login' className='navigation__link'>
            Entre ou cadastre-se
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
