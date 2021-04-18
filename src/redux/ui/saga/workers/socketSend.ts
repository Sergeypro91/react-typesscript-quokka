// Core
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
        yield put(uiCombineActions.startFetching());

        socketSendObj.socket.send(socketSendObj.message);
    } catch (error) {
        yield put(uiCombineActions.emitError(error, 'workerName worker'));
    }
}
