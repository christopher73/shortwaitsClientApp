import * as types from './types';

export const updateUser = (payload) => ({
  type: types.UPDATE_USER,
  payload,
});
