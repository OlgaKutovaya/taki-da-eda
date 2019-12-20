import {ADD_ITEM, DELETE_ITEM} from '../actionTypes/productsActionTypes';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        products: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
