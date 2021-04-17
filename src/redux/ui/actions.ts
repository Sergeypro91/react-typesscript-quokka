// Types
import { uiTypes, UiActions, SocketSendObj } from './types';

export const uiCombineActions = {
    // Sync
    startFetching: (): UiActions => ({
        type: uiTypes.START_FETCHING,
    }),
    stopFetching: (): UiActions => ({
        type: uiTypes.STOP_FETCHING,
    }),
    socketConnect: (): UiActions => ({
        type: uiTypes.SOCKET_CONNECT_ACYNC,
    }),
    socketDisconnect: (): UiActions => ({
        type: uiTypes.SOCKET_DISCONNECT_ACYNC,
    }),
    socketSend: (socketSendObj: SocketSendObj): UiActions => ({
        type: uiTypes.SOCKET_SEND,
        payload: socketSendObj,
    }),

    // Async
    socketMessage: (message: any): UiActions => ({
        type: uiTypes.SOCKET_MESSAGE_ACYNC,
        payload: message,
    }),
    emitError: (error: string, meta: null | string = null): UiActions => ({
        type: uiTypes.EMIT_ERROR,
        payload: error,
        error: true,
        meta,
    }),
};
