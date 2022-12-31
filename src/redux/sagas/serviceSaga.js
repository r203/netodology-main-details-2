import { put, takeLatest, call} from 'redux-saga/effects';
import { serviceRequest, serviceSuccess, serviceFailure } from '../serviceSlice';
import { getService } from '../../API/api'

//worker
function* handleServiceSaga(action) {
  try {
    const data = yield call(getService, action.payload);
    yield put(serviceSuccess(data));
  } catch (e) {
    yield put(serviceFailure(e));
  }
}

//watcher
export function* watchServiceSaga() {
    yield takeLatest(serviceRequest, handleServiceSaga);
}