import axios from 'axios';
import { Dispatch } from 'redux';
import { NotifyInput, NOTIFY_API } from '../types';

export const notify = (notifyInput: NotifyInput) => async (dispatch: Dispatch) => {
  await axios.post('/notify', notifyInput);
  return dispatch({
    type: NOTIFY_API,
  });
};
