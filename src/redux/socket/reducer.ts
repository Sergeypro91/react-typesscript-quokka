// Types
import { State, Actions, types } from './types';

const initialState: State = {
    isSocketConnected: false,
    socketMessage: null,
};

export const socketReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case types.SOCKET_CONNECT_ACYNC:
            return { ...state, isSocketConnected: true };

        case types.SOCKET_DISCONNECT_ACYNC:
            return { ...state, isSocketConnected: false };

        default:
            return state;
    }
};
