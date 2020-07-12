import { AuthState, AuthActionTypes, AUTH_LOGIN } from '../types';

const initialState: AuthState = {
  accessToken: null,
};

export default (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
