import React from 'react'

const ProductItem = ({ product }) => {
  return (
    <li className='col-phone-6 col-tab-port-4 col-tab-land-3 col-desktop-3 card'>
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
    </li>
  )
}

export default ProductItem
