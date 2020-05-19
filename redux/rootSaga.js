import { all, fork } from 'redux-saga/effects';
import authSaga from './authModule/saga';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
  ]);
}
