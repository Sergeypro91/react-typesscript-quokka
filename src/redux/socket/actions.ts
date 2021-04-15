// Types
import { types, SocketObj } from './types';

export const socketCombineActions = {
    // Sync
    sendMessage: (socketObj: SocketObj) => ({
        type: types.SEND_MESSAGE,
        payload: socketObj,
    }),

    // Async
    socetConnect: () => ({
        type: types.SOCKET_CONNECT_ACYNC,
    }),
    socetDisconnect: () => ({
        type: types.SOCKET_DISCONNECT_ACYNC,
    }),
};
