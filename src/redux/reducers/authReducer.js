import authActionTypes from '../actionTypes/authActionTypes';

const initialState = {
  currentUser: {},
};

export default (state = initialState, action) => {
  alert(JSON.stringify(action))
  switch (action.type) {
    case authActionTypes.SIGN_UP_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
