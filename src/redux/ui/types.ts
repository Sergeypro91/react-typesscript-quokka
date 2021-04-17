export interface UiState {
    isFetching: boolean;
    isSocketConnected: boolean;
    socketMessage: null | any;
}

export interface SocketSendObj {
    socket: WebSocket;
    message: string;
}

export const uiTypes = {
    // Sync
    START_FETCHING: 'START_FETCHING',
    STOP_FETCHING: 'STOP_FETCHING',
    SOCKET_CONNECT_ACYNC: 'SOCKET_CONNECT_ACYNC',
    SOCKET_DISCONNECT_ACYNC: 'SOCKET_DISCONNECT_ACYNC',
    SOCKET_SEND: 'SOCKET_SEND',

    // Async
    SOCKET_MESSAGE_ACYNC: 'SOCKET_MESSAGE_ACYNC',
    EMIT_ERROR: 'EMIT_ERROR',
};

interface StartFetchingType {
    type: typeof uiTypes.START_FETCHING;
    payload?: any;
}

interface StopFetchingType {
    type: typeof uiTypes.STOP_FETCHING;
    payload?: any;
}

interface SocketConnectType {
    type: typeof uiTypes.SOCKET_CONNECT_ACYNC;
    payload?: any;
}

interface SocketDisconnectType {
    type: typeof uiTypes.SOCKET_DISCONNECT_ACYNC;
    payload?: any;
}

interface SocketSendType {
    type: typeof uiTypes.SOCKET_SEND;
    payload: SocketSendObj;
}

interface SocketMessageType {
    type: typeof uiTypes.SOCKET_MESSAGE_ACYNC;
    payload: any;
}

interface ImitErrorType {
    type: typeof uiTypes.EMIT_ERROR;
    payload: string;
    error: boolean;
    meta: null | string;
}

export type UiActions =
    | StartFetchingType
    | StopFetchingType
    | SocketConnectType
    | SocketDisconnectType
    | SocketSendType
    | SocketMessageType
    | ImitErrorType;
