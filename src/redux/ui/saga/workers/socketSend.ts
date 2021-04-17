// Core
// import { put, apply } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

// Actions
import { uiCombineActions } from 'redux/ui/actions';

// Types
import { SocketSendObj } from 'redux/ui/types';

export function* socketSend({
    payload: socketSendObj,
}: {
    type: string;
    payload: SocketSendObj;
}) {
    try {
        socketSendObj.socket.send(socketSendObj.message);

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
        yield put(uiCombineActions.emitError(error, 'workerName worker'));
    }
}
