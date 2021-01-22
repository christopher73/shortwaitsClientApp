// Imports: Dependencies
import {delay, takeEvery, call, takeLatest, put} from 'redux-saga/effects';

// Worker: Increase Counter Async (Delayed By 4 Seconds)
export function* increaseCounterAsync() {
  try {
    // Delay 4 Seconds
    yield delay(4000);
    // Dispatch Action To Redux Store
    yield put({
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}

// Worker: Decrease Counter
export function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: 'DECREASE_COUNTER_ASYNC',
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}
