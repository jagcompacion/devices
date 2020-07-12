import axios from 'axios';
import { Dispatch } from 'redux';
import { AuthInput, AUTH_LOGIN } from '../types';

export const login = (authInput: AuthInput) => async (dispatch: Dispatch) => {
  const response = await axios.post('/login', authInput);
  return dispatch({
    type: AUTH_LOGIN,
    payload: {
      accessToken: response.data,
    },
  });
};
