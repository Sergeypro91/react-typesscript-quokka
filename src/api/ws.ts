// Core
import { Dispatch } from 'react';

// Config
import { ROOT_WS } from 'api';

// Types
import { UiActions } from 'redux/ui/types';

// Actions
import { uiCombineActions } from 'redux/ui/actions';

export const setupSocket = (
    dispatch: Dispatch<UiActions>,
    action: typeof uiCombineActions,
) => {
    const socket = new WebSocket(`${ROOT_WS}/v2/ws/validate/contractors`);

    socket.onopen = () => {
        console.log('%cWebSocket Client Connected', 'color:green');

        dispatch(action.socketConnect());
    };

    socket.onmessage = (event: MessageEvent) => {
        const message = JSON.parse(event.data);

        dispatch(action.socketMessage(message));
        dispatch(action.stopFetching());
    };

    socket.onclose = () => {
        console.log('%cWebSocket Client Disconnect', 'color: red');

        dispatch(action.socketDisconnect());

        let timeoutForReconnect: null | number = null;

        if (timeoutForReconnect) {
            clearTimeout(timeoutForReconnect);
        }

        if (socket.readyState !== 1) {
            timeoutForReconnect = window.setTimeout(() => {
                console.log('%cTry to reconnect', 'color:yellow');

                setupSocket(dispatch, action);
            }, 5000);
        }
    };

    socket.onerror = () => {
        console.error(
            '%cSocket encountered error: Closing socket',
            'color: red',
        );

        socket.close();
    };

    return socket;
};
