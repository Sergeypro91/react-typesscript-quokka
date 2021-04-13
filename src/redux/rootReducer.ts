// Core
import { combineReducers } from 'redux';

// Reducers
import { appReducer } from './App/appReducer';

export const rootReducer = combineReducers({
    app: appReducer,
});
