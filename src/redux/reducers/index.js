import {combineReducers} from 'redux';
import productsDataReducer from './products-data-reducer';
import usersDataReducer from './users-data-reducer';

export default combineReducers({
  productsData: productsDataReducer,
  usersData: usersDataReducer,
});
