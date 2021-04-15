// Core
import React, { useEffect } from 'react';

// Routes
import { Routes } from 'Routes/Routes';

// Store
import { store } from 'redux/store';
import { useDispatch } from 'react-redux';

// Actions
import { socketCombineActions } from 'redux/socket/actions';

// Socket
import { setupSocket } from 'redux/socket';

export const socket = setupSocket(store.dispatch, socketCombineActions);

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const test = {
            contractor_type: 3,
            inn: '402914238850',
            fromId: 0,
        };

        const socketObj = {
            socket,
            message: JSON.stringify(test),
        };

        setTimeout(() => {
            dispatch(socketCombineActions.sendMessage(socketObj));
        }, 2000);
    }, []);

    return <Routes />;
};
export default App;
