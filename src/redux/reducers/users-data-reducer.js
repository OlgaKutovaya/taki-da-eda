import {
  GET_USER_DATA,
  SET_ACTIVE_USER_DATA,
  USER_LOG_OUT,
  DELETE_USER,
  SAVE_EDITED_USER_DATA,
  SAVE_NEW_USER_DATA,
} from '../actionTypes/users-action-types';

const initialState = {
  users: [],
  activeUser: {},
  activeEditedUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case SET_ACTIVE_USER_DATA:
      const userIndex = state.users.findIndex(
        item => item.id === action.payload.id,
      );
      let newUsers = [...state.users];
      let newUser = {...state.users[userIndex]};
      newUser.isLoggedIn = true;
      newUser.isLoggedIn = true;
      newUser.lastLoginTime = new Date().getTime() / 1000;
      newUsers[userIndex] = newUser;
      return {
        ...state,
        users: newUsers,
        activeUser: action.payload,
      };
    case USER_LOG_OUT:
      return {
        ...state,
        users: action.payload.users,
        activeUser: action.payload.activeUser,
      };
    case DELETE_USER:
      return {
        ...state,
        users: action.payload,
      };
    case SAVE_EDITED_USER_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case SAVE_NEW_USER_DATA:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
