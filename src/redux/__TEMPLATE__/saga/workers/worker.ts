// Core
// import { put, apply } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

// API
// import { api } from 'REST';

// Actions
// import { combineActions } from 'redux/...';
import { uiActions } from 'redux/ui/actions';

export function* worker() {
    try {
        yield put(uiActions.startFetching());

        // Making a request for data
        /*
        const response = yield apply(api, api.posts.fetch);
        const { data: post, message } = yield apply(response, response.json);
        */

        // Process the response and anticipate an error
        /*
        if (response.status !== 200) {
            throw new Error(message);
        }
        */

        // Run action from 'redux/{domainName}/actions
        /* yield put(combineActions.{actionItSelf}); */
    } catch (error) {
        yield put(uiActions.emitError(error, 'workerName worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
