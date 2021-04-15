// Core
import { Dispatch } from 'react';

// Config
import { ROOT_WS } from 'REST';

// Types
import { Actions } from 'redux/socket/types';

// Actions
import { socketCombineActions } from 'redux/socket/actions';

export const setupSocket = (
    dispatch: Dispatch<Actions>,
    action: typeof socketCombineActions,
) => {
    const socket = new WebSocket(`${ROOT_WS}/v2/ws/validate/contractors`);

    socket.onopen = () => {
        dispatch(action.socetConnect());

        console.log('%cWebSocket Client Connected', 'color:green');
    };

    socket.onmessage = (event: MessageEvent) => {
        const timeEvent = JSON.parse(event.data);

        console.log(timeEvent);
    };

    socket.onclose = () => {
        dispatch(action.socetDisconnect());

        console.log('%cWebSocket Client Disconnect', 'color: red');

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
