import reducers from './reducers';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const FETCH_DEVICES = 'FETCH_DEVICES';
export const NOTIFY_API = 'NOTIFY_API';

export type RootState = ReturnType<typeof reducers>;

export type AuthInput = {
  email: string;
  password: string;
};

export type NotifyInput = {
  name: string;
  email: string;
  repoUrl: string;
  message: string;
};

export type AuthState = {
  accessToken: string | null;
};

export type DeviceState = {
  id: number;
  name: string;
};

export type DevicesState = DeviceState[];

type AuthLoginAction = {
  type: typeof AUTH_LOGIN;
  payload: AuthState;
};

type DevicesFetchAction = {
  type: typeof FETCH_DEVICES;
  payload: DevicesState;
};

export type AuthActionTypes = AuthLoginAction;
export type DevicesActionTypes = DevicesFetchAction;
