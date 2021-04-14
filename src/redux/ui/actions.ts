// Types
import { Actions, types } from './types';

export const uiActions = {
    startFetching: (): Actions => ({
        type: types.START_FETCHING,
    }),
    stopFetching: (): Actions => ({
        type: types.STOP_FETCHING,
    }),
    emitError: (error: string, meta: null | string = null): Actions => ({
        type: types.EMIT_ERROR,
        payload: error,
        error: true,
        meta,
    }),
};
