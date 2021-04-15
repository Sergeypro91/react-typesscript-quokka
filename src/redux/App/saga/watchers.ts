// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../appTypes';

// Workers
import { plusCounter, fetchPosts } from './workers';

function* watchPlusCounter() {
    yield takeEvery(types.PLUS_ONE, plusCounter);
}
function* watchFetchPosts() {
    yield takeEvery(types.FETCH_POST_ASYNC, fetchPosts);
}

export function* watcheCounter() {
    yield all([call(watchPlusCounter), call(watchFetchPosts)]);
}
