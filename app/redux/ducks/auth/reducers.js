import {combineReducers} from 'redux';
import * as types from './types';

/* State shape
{
    isAuthenticated: bool,
    redirectAfterLogin: string
}
*/
function login(state = [], action) {
  const response = action.response;
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {...state, response};
    case types.LOGIN_USER_ERROR:
      return {...state, response};
    default:
      return state;
  }
}
function register(state = [], action) {
  let response = action.response;
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return {...state, response};
    case types.REGISTER_USER_ERROR:
      return {...state, response};
    default:
      return state;
  }
}

export default combineReducers({
  login,
  register,
});

/**
 * backup from redux util
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
userData: {},
isLoading: false
error: null,
};
export const authSlice = createSlice({
name: 'auth', // name used in action types
initialState, // initial state for the reducer
reducers: {
authUserStart(state) {
state.isLoading = true;
state.error = null;
},
authUserSuccess(state, action) {
const {userData} = action.payload;
state.userData = userData;
state.isLoading = false;
state.error = null;
},
authUserFailure(state, action) {
state.isLoading = false;
state.error = action.payload;
},
},
});
 */

// import {combineReducers} from '@reduxjs/toolkit';
// import {authSlice} from './auth';
// const rootReducer = combineReducers({
//   auth: authSlice.reducer,
// });
// export default rootReducer;
