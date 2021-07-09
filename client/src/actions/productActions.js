import axios from 'axios';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from './types';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    console.log(error);

    dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
  }
};
