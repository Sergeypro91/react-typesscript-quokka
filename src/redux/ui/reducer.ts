// Types
import { UiState, UiActions, uiTypes } from './types';

const initialState: UiState = {
    isFetching: false,
    isSocketConnected: false,
    socketMessage: null,
};

export const uiReducer = (state = initialState, action: UiActions) => {
    switch (action.type) {
        case uiTypes.START_FETCHING:
            return { ...state, isFetching: true };

        case uiTypes.STOP_FETCHING:
            return { ...state, isFetching: false };

        case uiTypes.SOCKET_CONNECT:
            return { ...state, isSocketConnected: true };

        case uiTypes.SOCKET_DISCONNECT:
            return { ...state, isSocketConnected: false };

        case uiTypes.SOCKET_MESSAGE_ACYNC:
            return { ...state, socketMessage: action.payload };

        default:
            return state;
    }
};
