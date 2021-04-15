// Core
import io from 'socket.io-client';

// Config
import { ROOT_WS } from 'REST';

export const socket = io(ROOT_WS, {
    path: '/ws/validate/contractors',
});

export const joinSocketChannel = () => {
    // socket.emit('join');
    socket.open();
};
