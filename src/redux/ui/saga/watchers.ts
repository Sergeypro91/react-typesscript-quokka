// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { uiTypes } from '../uiTypes';

// Workers
import { socketSend } from './workers';

function* watchSocketSend() {
    yield takeEvery(uiTypes.SOCKET_SEND, socketSend);
}

export function* watcheUi() {
    yield all([call(watchSocketSend)]);
}
