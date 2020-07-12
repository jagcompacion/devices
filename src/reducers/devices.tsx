import { DevicesState, DevicesActionTypes, FETCH_DEVICES } from '../types';

const initialState: DevicesState = [];

export default (state = initialState, action: DevicesActionTypes): DevicesState => {
  switch (action.type) {
    case FETCH_DEVICES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
