// Core
import { put, apply } from 'redux-saga/effects';

// API
import { api } from 'api';

// Actions
import { appCombineActions } from 'redux/App/appActions';
import { uiCombineActions } from 'redux/ui/actions';

export function* fetchPosts() {
    try {
        yield put(uiCombineActions.startFetching());

        // @ts-ignore
        const response = yield apply(api, api.posts.fetch);
        // @ts-ignore
        const { data: posts, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(appCombineActions.fillPosts(posts));
    } catch (error) {
        yield put(uiCombineActions.emitError(error, 'fetchPosts worker'));
    } finally {
        yield put(uiCombineActions.stopFetching());
    }
}
