// Imports: Dependencies
import {take, takeLatest, all} from 'redux-saga/effects';
import {initUser} from './authSaga';
import * as type from '../redux/ducks/auth/types';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([takeLatest(type.INIT_USER, initUser)]);
}
