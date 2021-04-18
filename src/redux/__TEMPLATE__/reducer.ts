// Immer
import { produce } from 'immer';

// Types
import { State, Actions, types } from './types';

const initialState: State = {
    type: 0,
};

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case types.TYPE:
            return produce(state, (draftState) => {
                draftState.type = 0;
            });

        default:
            return state;
    }
};
