import {all} from 'redux-saga/effects';
import MenuSaga from './menu/saga';

export default function* rootSaga() {
  yield all([MenuSaga()]);
}
