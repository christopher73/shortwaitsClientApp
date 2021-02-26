import {combineReducers} from 'redux';
import * as types from './types';

export function userData(
  state = {
    location: {
      coords: null,
      timestamp: null,
    },
    firstName: null,
    lastName: null,
    servicesOfChoice: null,
    token: null,
  },
  action,
) {
  switch (action.type) {
    // case types.INIT_USER:
    //   return {...state};
    case types.UPDATE_USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

// export const user = combineReducers({
//   userData,
// });
