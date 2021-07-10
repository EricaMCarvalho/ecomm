import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../ProductList';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Hero from '../Hero';
import { listProducts } from '../../actions/productActions';
import Alert from '../Alert';

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <h1 className='heading-primary'>Produtos em destaque</h1>
      <h2 className='heading-secondary'>
        <i className='fas fa-cookie-bite'></i> Novidades e mais vendidos
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : (
        <ProductList
          products={products.filter((product) => product.isFeatured)}
        />
      )}
      <AboutPage />
      <ContactPage />
    </>
  );
};

export default HomePage;
