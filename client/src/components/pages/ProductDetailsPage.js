import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productActions';
import Loader from '../Loader';
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
        <p>{error}</p>
      ) : (
        <>
          <div className='product-details'>
            <img src={product.image} alt={product.name} />
            <div className='product-details__info'>
              <h2 className='heading-secondary'>{product.name}</h2>
              <h3 className='heading-quaternary'>
                {toRealCurrency(product.price)}
              </h3>
              <p>{product.description}</p>
            </div>
            <div className='product-details__order'>
              <h3 className='heading-quaternary'>
                {toRealCurrency(product.price)}
              </h3>
              {product.countInStock > 0 ? (
                <p>Disponibilidade imediata. Faça já o seu pedido!</p>
              ) : (
                <p>
                  Este produto não possui disponibilidate imediata. Você não
                  será cobrado(a) até que sua encomenda seja confirmada.
                </p>
              )}
              <form className='form'>
                <label htmlFor='qty'>Quantidade:</label>

                <select name='qty' id='qty'>
                  {[...Array(product.countInStock).keys()].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>

                <button className='button button-primary'>
                  <i className='fas fa-shopping-bag'></i> Adicionar à sacola
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
