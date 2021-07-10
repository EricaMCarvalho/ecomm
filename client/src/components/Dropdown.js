import React, { useState } from 'react';

const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='custom-dropdown'>
      <button className='custom-dropdown-label' onClick={() => setOpen(!open)}>
        {label} <i className='fas fa-arrow-down'></i>
      </button>
      {open && <ul className='custom-dropdown-item-container'>{children}</ul>}
    </div>
  );
};

export default Dropdown;
