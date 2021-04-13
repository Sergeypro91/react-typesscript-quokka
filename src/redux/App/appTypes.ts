export interface AppState {
    counter: number;
    posts: undefined | Posts;
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type Posts = Array<Post>;

export const types = {
    PLUS_ONE: 'PLUS_ONE',
    FILL_POST_ASYNC: 'FILL_POST_ASYNC',
    FETCH_POST_ASYNC: 'FETCH_POST_ASYNC',
};

interface AppCounter {
    type: typeof types.PLUS_ONE;
    payload?: undefined;
}

interface AppFillPost {
    type: typeof types.FILL_POST_ASYNC;
    payload: Posts;
}

interface AppFetchPost {
    type: typeof types.FETCH_POST_ASYNC;
    payload?: undefined;
}

export type AppActions = AppCounter | AppFillPost | AppFetchPost;
