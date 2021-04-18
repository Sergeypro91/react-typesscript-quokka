// Reselect
import { createSelector } from 'reselect';

// State
import { State } from 'redux/store';

export const getPosts = (state: State) => state.app.posts;

export const getFiltresPost = createSelector(getPosts, (posts) =>
    posts?.filter((item, id, arr) => item !== arr[id + 1]),
);
