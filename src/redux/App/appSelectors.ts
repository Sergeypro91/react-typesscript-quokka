// Reselect
import { createSelector } from 'reselect';

// State
import { State } from '../store';

export const getCounter = (state: State) => state.app.counter;

export const getPosts = (state: State) => state.app.posts;

export const getFiltresPost = createSelector(getPosts, (posts) =>
    posts?.filter((item, id, arr) => item !== arr[id + 1]),
);

export const getIsFetching = (state: State) => state.ui.isFetching;

export const getIsSocketConnected = (state: State) =>
    state.ui.isSocketConnected;
