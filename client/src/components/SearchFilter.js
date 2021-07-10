import React from 'react';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

const SearchFilter = () => {
  // TODO: Change this to state, create categories for admin
  const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

  return (
    <div className='search-filter'>
      <div className='search-bar'>
        <i className='search-bar-icon fas fa-search'></i>
        <input
          className='search-bar-input'
          type='text'
          placeholder='Faça sua busca'
        />
      </div>
      <Dropdown label='Categoria'>
        {categories.map((category) => (
          <DropdownItem key={category} value={category} />
        ))}
      </Dropdown>
    </div>
  );
};

export default SearchFilter;
