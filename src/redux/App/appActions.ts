// Types
import { AppActions, types, Posts } from './appTypes';

export const appCombineActions = {
    plusOne: (): AppActions => ({
        type: types.PLUS_ONE,
    }),
    fillPosts: (posts: Posts): AppActions => ({
        type: types.FILL_POST_ASYNC,
        payload: posts,
    }),
    fetchPostAsync: (): AppActions => ({
        type: types.FETCH_POST_ASYNC,
    }),
};
