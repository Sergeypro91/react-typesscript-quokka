export interface State {
    isAuthenticate: boolean;
}

export const types = {
    // Sync
    AUTHENTICATE: 'AUTHENTICATE',

    // Async
    SIGNUP_ASYNC: 'SIGNUP_ASYNC',
};

interface AuthenticateType {
    type: typeof types.AUTHENTICATE;
}

interface SignUpType {
    type: typeof types.SIGNUP_ASYNC;
    payload: any;
}

export type Actions = AuthenticateType | SignUpType;
