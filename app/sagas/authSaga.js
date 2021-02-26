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
import {navigate, navigateAndSimpleReset} from '../navigation';
import * as type from '../redux/ducks/auth/types';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
export function* initUser() {
  try {
    // Delay 4 Second
    yield delay(2000);
    navigate('authStack');
    yield put({
      type: type.INIT_USER_FAILED,
    });
  } catch (error) {
    yield put({
      type: type.INIT_USER_ERROR,
      error,
    });
  }
}
// export function* getUserLocation() {
//   try {
//     // Delay 4 Second
//     yield delay(2000);
//     navigate('authStack');
//     yield put({
//       type: type.INIT_USER_FAILED,
//     });
//   } catch (error) {
//     yield put({
//       type: type.INIT_USER_ERROR,
//       error,
//     });
//   }
// }
