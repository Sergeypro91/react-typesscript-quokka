export interface State {
    isFetching: boolean;
}

export const types = {
    START_FETCHING: 'START_FETCHING',
    STOP_FETCHING: 'STOP_FETCHING',
    EMIT_ERROR: 'EMIT_ERROR',
};

interface StartFetching {
    type: typeof types.START_FETCHING;
}

interface StopFetching {
    type: typeof types.STOP_FETCHING;
}

interface InitError {
    type: typeof types.EMIT_ERROR;
    payload: string;
    error: boolean;
    meta: null | string;
}

export type Actions = StartFetching | StopFetching | InitError;
