// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

// Supporting libraries
import _ from 'lodash';

// Reducer
import { rootReducer } from './rootReducer';

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const localState = localStorage.getItem('state');
const initialState = createStore(rootReducer).getState();
const preloadedState =
    localState && _.merge(initialState, JSON.parse(localState));

export const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(logger)),
);

export type State = ReturnType<typeof rootReducer>;

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('state', JSON.stringify(state));
});
