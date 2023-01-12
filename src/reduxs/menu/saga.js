import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {REQUEST_MENU} from 'reduxs/types';
import {requestMenuSuccess, requestMenuError} from './actions';
import server from 'api/server';

//REQUEST MENU
export function* watcherRequestMenuItem() {
  yield takeEvery(REQUEST_MENU, workerRequestMenuItem);
}

const requestMenuItem = () => {
  return server
    .post('/MobileApi/MobileApi/GetMenuRoleRightsOfMobile')
    .then(res => res)
    .catch(err => err);
};

function* workerRequestMenuItem() {
  try {
    const response = yield call(requestMenuItem);

    if (response.status === 200) {
      yield put(requestMenuSuccess(response.data));
    }
  } catch (err) {
    console.log('Error from request menu items >>> ', err.message);
    yield put(requestMenuError(err.message));
  }
}

export default function* rootSaga() {
  yield all([fork(watcherRequestMenuItem)]);
}
