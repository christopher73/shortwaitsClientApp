/**
 *
 * @see https://www.ajaypalcheema.com/redux-saga-cheatsheet/
 * Great explainanation for reux saga effects
 *
 */
import {
  delay,
  takeEvery,
  takeLatest,
  take,
  put,
  call,
} from 'redux-saga/effects';
import {navigateAndSimpleReset} from '../navigation';
import * as type from '../redux/ducks/auth/types';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
export function* initUser(payload) {
  try {
    console.log('payload @ INIT_USER_SUCCESS sagas' + JSON.stringify(payload));
    console.log('4 seconds');
    // Delay 4 Seconds

    yield delay(4000);
    yield put({
      type: type.INIT_USER_SUCCESS,
    });
    yield navigateAndSimpleReset('main');
  } catch (error) {
    yield put({
      type: type.INIT_USER_ERROR,
      error,
    });
  }
}
