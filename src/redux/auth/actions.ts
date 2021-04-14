// Types
import { Actions, types } from './types';

export const authAction = {
    // Sync
    authenticate: (): Actions => ({
        type: types.AUTHENTICATE,
    }),

    // Async
    signUp: (userData: any): Actions => ({
        type: types.SIGNUP_ASYNC,
        payload: userData,
    }),
};
