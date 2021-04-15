// Core
// import { put, apply } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

// Actions
import { uiActions } from 'redux/ui/actions';

// Types
import { SocketObj } from 'redux/socket/types';

export function* worker({
    payload: socketObj,
}: {
    type: string;
    payload: SocketObj;
}) {
    try {
        socketObj.socket.send(socketObj.message);

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
    }
}
