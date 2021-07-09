import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import ProductList from '../ProductList';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className='heading-primary'>Nossos Produtos</h1>
      <h2 className='heading-secondary'>Conheça nossos produtos</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default ProductsPage;
