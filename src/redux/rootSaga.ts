// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watcheCounter } from 'redux/App/saga/watchers';
import { watcheSocket } from 'redux/socket/saga/watchers';

export function* rootSaga() {
    yield all([call(watcheCounter), call(watcheSocket)]);
}
