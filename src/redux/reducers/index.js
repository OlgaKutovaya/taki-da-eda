import {combineReducers} from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import favouritesReducer from './favouritesReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  favourites: favouritesReducer,
  cart: cartReducer,
});
