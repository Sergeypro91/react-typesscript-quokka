// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { worker } from './workers';

function* watchWorker() {
    yield takeEvery(types.SEND_MESSAGE, worker);
}

export function* watcheSocket() {
    yield all([call(watchWorker)]);
}
