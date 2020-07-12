import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_DEVICES } from '../types';

export const fetchDevices = () => async (dispatch: Dispatch) => {
  const response = await axios.get('/devices');
  const { devices } = response.data;
  return dispatch({
    type: FETCH_DEVICES,
    payload: devices,
  });
};
