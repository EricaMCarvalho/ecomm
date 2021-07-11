import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productActions';
import Loader from '../Loader';
import Alert from '../Alert';
import { toRealCurrency } from '../../helpers';

const ProductDetailsPage = ({ match }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link to='/produtos' className='button m-2'>
        <i className='far fa-arrow-alt-circle-left'></i> Voltar
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert variant='error'>{error}</Alert>
      ) : (
        <>
          <div className='product-details'>
            <h1 className='heading-primary product-details-title'>
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
                <form className='product-form'>
                  <label forHtml='qty'>Quantidade: </label>
                  <select
                    id='qty'
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((q) => (
                      <option key={q + 1} value={q + 1}>
                        {q + 1}
                      </option>
                    ))}
                  </select>

                  <button className='button button-primary m-2'>
                    <i className='fas fa-shopping-bag'></i> Adicionar à sacola
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
