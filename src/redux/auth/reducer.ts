// Types
import { State, Actions, types } from './types';

const initialState: State = {
    isAuthenticate: false,
};

export const authReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return {
                ...state,
                isAuthenticate: true,
            };

        default:
            return state;
    }
};
