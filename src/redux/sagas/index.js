import { spawn} from 'redux-saga/effects';
import {watchServicesSaga} from './servicesSaga'
import {watchServiceSaga} from './serviceSaga'

export default function* rootSaga() {
  yield spawn(watchServicesSaga);
  yield spawn(watchServiceSaga);
}

