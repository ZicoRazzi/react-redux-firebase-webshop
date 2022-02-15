import { all, call } from '@redux-saga/core/effects';

import userSagas from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(userSagas)]);
}
