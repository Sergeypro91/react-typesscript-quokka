// Immer
import { produce } from 'immer';

// Types
import { UiState, UiActions, uiTypes } from './uiTypes';

const initialState: UiState = {
    isFetching: false,
    isSocketConnected: false,
    socketMessage: null,
};

export const uiReducer = (state = initialState, action: UiActions) => {
    switch (action.type) {
        case uiTypes.START_FETCHING:
            return produce(state, (draftState) => {
                draftState.isFetching = true;
            });

        case uiTypes.STOP_FETCHING:
            return produce(state, (draftState) => {
                draftState.isFetching = false;
            });

        case uiTypes.SOCKET_CONNECT:
            return produce(state, (draftState) => {
                draftState.isSocketConnected = true;
            });

        case uiTypes.SOCKET_DISCONNECT:
            return produce(state, (draftState) => {
                draftState.isSocketConnected = false;
            });

        case uiTypes.SOCKET_MESSAGE_ACYNC:
            return produce(state, (draftState) => {
                draftState.socketMessage = action.payload;
            });

        default:
            return state;
    }
};
