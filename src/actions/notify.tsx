import axios from 'axios';
import { Dispatch } from 'redux';
import { NotifyInput, NOTIFY_API } from '../types';

export const notify = (notifyInput: NotifyInput, accessToken: string) => async (dispatch: Dispatch) => {
  await axios.post('/notify', notifyInput, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return dispatch({
    type: NOTIFY_API,
  });
};
