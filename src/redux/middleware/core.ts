// Core
import { createStore, applyMiddleware, compose } from 'redux';

// Middleware
import { createLogger } from 'redux-logger';
import createSagaMidlleware from 'redux-saga';

// Supporting libraries
import _ from 'lodash';
import isDev from 'utils/isDev/isDev';

// Reducer
import { rootReducer } from '../rootReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#139BFF',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#FF0005',
    },
});

const sagaMidlleware = createSagaMidlleware();
const composeEnhancers =
    (isDev() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const localState = localStorage.getItem('state');
const initialState = createStore(rootReducer).getState();
const preloadedState = _.merge(
    initialState,
    localState && JSON.parse(localState),
);
const middleware: any[] = [sagaMidlleware];

if (isDev()) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { preloadedState, enhancedStore, sagaMidlleware };
