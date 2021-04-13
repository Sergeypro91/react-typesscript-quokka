export interface State {
    isFetching: boolean;
}

export const types = {
    START_FETCHING: 'START_FETCHING',
    STOP_FETCHING: 'STOP_FETCHING',
};

interface StartFetching {
    type: typeof types.START_FETCHING;
}

interface StopFetching {
    type: typeof types.STOP_FETCHING;
}

export type Actions = StartFetching | StopFetching;
