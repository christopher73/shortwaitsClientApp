import * as types from './types';

export const initUser = (payload) => ({
  type: types.INIT_USER,
  payload,
});
