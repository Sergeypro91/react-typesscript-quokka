// Core
import { createStore } from 'redux';

// Roots
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

// Middleware
import {
    preloadedState,
    enhancedStore,
    sagaMidlleware,
} from './middleware/core';

export const store = createStore(rootReducer, preloadedState, enhancedStore);

export type State = ReturnType<typeof rootReducer>;

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('state', JSON.stringify(state));
});

sagaMidlleware.run(rootSaga);
