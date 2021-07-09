import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productActions';

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
      <div className='row'>
        <Link to='/produtos' className='button'>
          Voltar
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='row'>
          <div className='col-phone-12 col-tab-port-6 col-tab-land-4'>
            <img src={product.image} alt={product.name} />
          </div>
          <ul className='col-phone-12 col-tab-port-6 col-tab-land-4'>
            <li>
              <h3 classname='heading-tertiary'>{product.name}</h3>
            </li>
            <li>
              <h4 className='heading-quaternary'>R$ {product.price}</h4>
            </li>
            <li>
              <p>{product.description}</p>
            </li>
          </ul>
          <ul className='col-phone-12 col-tab-port-6 col-tab-land-4'>
            <li>
              <h4 className='heading-quaternary'>R$ {product.price}</h4>
            </li>
            <li>
              <button className='button'>Compre agora</button>
            </li>
            <li>
              <button className='button'>Adicionar à sacola</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
