// Types
import { AppActions, types, Posts } from './appTypes';

export const appCombineActions = {
    // Sync
    plusOne: (): AppActions => ({
        type: types.PLUS_ONE,
    }),
    fillPosts: (posts: Posts): AppActions => ({
        type: types.FILL_POST,
        payload: posts,
    }),

    // Async
    fetchPostAsync: (): AppActions => ({
        type: types.FETCH_POST_ASYNC,
    }),
};
