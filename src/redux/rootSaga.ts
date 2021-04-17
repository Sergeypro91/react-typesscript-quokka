// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watcheCounter } from 'redux/App/saga/watchers';
import { watcheUi } from 'redux/ui/saga/watchers';

export function* rootSaga() {
    yield all([call(watcheCounter), call(watcheUi)]);
}
