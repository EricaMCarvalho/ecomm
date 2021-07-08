import React from 'react';
import Nav from './Nav';

const Navigation = () => {
  return (
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />
        <label
          htmlFor='navi-toggle'
          className='header__button header__button--right navigation__button'
        >
          <span className='navigation__icon'></span>
        </label>

        <Nav />
      </div>
  )
}

export default Navigation
