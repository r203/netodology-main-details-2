import { put, takeLatest, call } from 'redux-saga/effects';
import { servicesRequest, servicesSuccess, servicesFailure } from '../servicesSlice';
import { getServices } from '../../API/api'

//worker
function* handleServicesSaga(action) {
  try {
    const data = yield call(getServices);
    yield put(servicesSuccess(data));
  } catch (e) {
    yield put(servicesFailure(e));
  }
}

//watcher
export function* watchServicesSaga() {
    yield takeLatest(servicesRequest, handleServicesSaga);
}