// Types
import { State, Actions, types } from './types';

const initialState: State = {
    type: 0,
};

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case types.TYPE:
            return state;

        default:
            return state;
    }
};
