import {combineReducers} from 'redux';
import * as types from './types';

/* State shape
{
    isAuthenticated: bool,
    redirectAfterLogin: string
}
*/
// function login(state = [], action) {
//   const payload = action.payload;
//   switch (action.type) {
//     case types.LOGIN_USER_SUCCESS:
//       return {...state, payload};
//     case types.LOGIN_USER_ERROR:
//       return {...state, payload};
//     default:
//       return state;
//   }
// }
// function register(state = [], action) {
//   let payload = action.payload;
//   switch (action.type) {
//     case types.REGISTER_USER_SUCCESS:
//       return {...state, payload};
//     case types.REGISTER_USER_ERROR:
//       return {...state, payload};
//     default:
//       return state;
//   }
// }
function userInit(state = {loading: true, error: null}, action) {
  let payload = action.payload;
  switch (action.type) {
    case types.INIT_USER:
      return {...state, payload};
    case types.INIT_USER_ASYNC:
      return {...state, loading: false, payload};
    default:
      return state;
  }
}

export default combineReducers({
  // login,
  // register,
  userInit,
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
