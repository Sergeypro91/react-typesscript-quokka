// Core
import { combineReducers } from 'redux';

// Reducers
import { appReducer } from './App/appReducer';
import { uiReducer } from './ui/reducer';
import { authReducer } from './auth/reducer';
import { socketReducer } from './socket/reducer';

export const rootReducer = combineReducers({
    app: appReducer,
    ui: uiReducer,
    auth: authReducer,
    socket: socketReducer,
});
