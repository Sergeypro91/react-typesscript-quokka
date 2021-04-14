// Core
import { put, apply } from 'redux-saga/effects';

// API
import { api } from 'REST';

// Actions
import { appCombineActions } from 'redux/App/appActions';
import { uiActions } from 'redux/ui/actions';

export function* fetchPosts() {
    try {
        yield put(uiActions.startFetching());

        // @ts-ignore
        const response = yield apply(api, api.posts.fetch);
        // @ts-ignore
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(appCombineActions.fillPosts(post));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchPosts worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
