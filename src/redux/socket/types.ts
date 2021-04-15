export interface State {
    isSocketConnected: boolean;
    socketMessage: null | any;
}

export interface SocketObj {
    socket: WebSocket;
    message: string;
}

export const types = {
    // Sync
    SEND_MESSAGE: 'SEND_MESSAGE',

    // Async
    SOCKET_CONNECT_ACYNC: 'SOCKET_CONNECT_ACYNC',
    SOCKET_DISCONNECT_ACYNC: 'SOCKET_DISCONNECT_ACYNC',
};

interface SendMessageType {
    type: typeof types.SEND_MESSAGE;
    payload: SocketObj;
}

interface SocketConnectType {
    type: typeof types.SOCKET_CONNECT_ACYNC;
}

interface SocketDisconnectType {
    type: typeof types.SOCKET_DISCONNECT_ACYNC;
}

export type Actions =
    | SendMessageType
    | SocketConnectType
    | SocketDisconnectType;
