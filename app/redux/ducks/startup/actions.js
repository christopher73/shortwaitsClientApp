import * as types from './types';
export const registerUser = (user) => {
  return {
    type: types.REGISTER_USER,
    payload: user,
  };
};

export const loginUser = (user) => {
  return {
    type: types.LOGIN_USER,
    payload: user,
  };
};

export const authInit = (payload) => {
  return {
    type: types.INIT_USER,
    payload,
  };
};
