import { MAIN_URL } from './config';

export const api = {
    posts: {
        fetch() {
            return fetch(`${MAIN_URL}/posts`, {
                method: 'GET',
            });
        },
    },
};
