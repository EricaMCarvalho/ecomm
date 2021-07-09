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
      <h2 className='heading-secondary'>Algum texto aqui</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default ProductsPage;
