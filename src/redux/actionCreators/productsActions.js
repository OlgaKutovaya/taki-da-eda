import productsActionTypes from '../actionTypes/productsActionTypes';

export const addItem = product => {
  return {
    type: productsActionTypes.GET_PRODUCT,
    payload: {
      id: 1,
    },
  };
};

export const deleteItem = id => {
  return {
    type: productsActionTypes.GET_PRODUCTS,
    payload: id,
  };
};
