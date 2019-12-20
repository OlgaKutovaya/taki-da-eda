import {ADD_ITEM, DELETE_ITEM} from '../actionTypes/productsActionTypes';

const initialState = {
  favouriteProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        favouriteProducts: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        favouriteProducts: action.payload,
      };
    default:
      return state;
  }
};
