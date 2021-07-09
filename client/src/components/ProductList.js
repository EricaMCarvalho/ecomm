import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <ul className='row'>
      {products.map((product) => (
        <li
          key={product._id}
          className='col-phone-6 col-tab-port-4 col-tab-land-3 col-desktop-3 card'
        >
          <Link to={`/produtos/${product._id}`}>
            <div className='product-item'>
              <img
                src={product.image}
                alt={product.name}
                className='product-item__image'
              />
              <h3 className='heading-tertiary'>{product.name}</h3>
              <h4 className='heading-quaternary'>R$ {product.price}</h4>
              <div className='image-box'></div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
