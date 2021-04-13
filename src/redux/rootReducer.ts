// Core
import { combineReducers } from 'redux';

// Reducers
import { appReducer } from './App/appReducer';
import { uiReducer } from './ui/reducer';

export const rootReducer = combineReducers({
    app: appReducer,
    ui: uiReducer,
});
