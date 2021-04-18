// Core
import React, { useEffect } from 'react';

// Routes
import { Routes } from 'Routes/Routes';

// Store
import { store } from 'redux/store';
import { useDispatch } from 'react-redux';

// Actions
import { uiCombineActions } from 'redux/ui/uiActions';

// Socket
import { setupSocket } from 'api';

export const socket = setupSocket(store.dispatch, uiCombineActions);

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiCombineActions.socketDisconnect());
    }, []);

    return <Routes />;
};
export default App;
