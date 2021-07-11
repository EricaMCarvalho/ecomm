import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productActions';
import Loader from '../Loader';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
import Alert from '../Alert';
import { toRealCurrency } from '../../helpers';

const ProductDetailsPage = ({ match }) => {
  const dispatch = useDispatch();

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link to='/produtos' className='button my-2'>
        <i className='far fa-arrow-alt-circle-left'></i> Voltar
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert variant='error'>{error}</Alert>
      ) : (
        <>
          <div className='product-details'>
            <h1 className='heading-primary my-1'>
              <i className='fas fa-cookie-bite'></i> {product.name}
            </h1>
            <div className='product-details-grid'>
              <img
                className='product-details__image'
                src={product.image}
                alt={product.name}
              />
              <div className='product-details-grid__info'>
                <h3 className='heading-quaternary product-price'>
                  <i className='fas fa-tag'></i> {toRealCurrency(product.price)}
                </h3>
                <p className='product-description my-2'>
                  {product.description}
                </p>
                {product.countInStock > 0 ? (
                  <Alert variant='success' className='my-2'>
                    Disponibilidade imediata. Faça já o seu pedido!
                  </Alert>
                ) : (
                  <Alert variant='danger'>
                    Este produto não possui disponibilidate imediata. Você não
                    será cobrado(a) até que sua encomenda seja confirmada.
                  </Alert>
                )}
                <Dropdown className='my-2' label='Quantidade'>
                  {[...Array(product.countInStock).keys()].map((q) => (
                    <DropdownItem key={q} value={q} />
                  ))}
                </Dropdown>

                <button className='button button-primary m-2'>
                  <i className='fas fa-shopping-bag'></i> Adicionar à sacola
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
