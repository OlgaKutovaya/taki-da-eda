import authActionTypes from '../actionTypes/authActionTypes';

export const signUpUser = userData => {
  return async dispatch => {
    const responseRegister = await fetch(
      'http://localhost:5000/api/v1/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    );
    const dataRegister = await responseRegister.json();
    if (dataRegister.success) {
      const responseCurrent = await fetch(
        'http://localhost:5000/api/v1/auth/current',
        {
          headers: {
            Authorization: dataRegister.token,
          },
        },
      );
      const dataCurrent = await responseCurrent.json();
      dispatch({
        type: authActionTypes.SIGN_UP_USER,
        payload: dataCurrent.user,
      });
    }
  };
};
