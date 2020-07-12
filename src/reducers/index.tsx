import { combineReducers } from 'redux';
import auth from './auth';
import devices from './devices';

export default combineReducers({
  auth,
  devices,
});
