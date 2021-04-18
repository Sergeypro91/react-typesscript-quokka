// Immer
import { produce } from 'immer';

// Types
import { AppState, AppActions, types } from './appTypes';

const initialState: AppState = {
    counter: 0,
    posts: [],
};

export const appReducer = (
    state = initialState,
    action: AppActions,
): AppState => {
    switch (action.type) {
        case types.PLUS_ONE:
            return produce(state, (draftState) => {
                draftState.counter += 1;
            });

        case types.FILL_POST:
            return produce(state, (draftState) => {
                draftState.posts = action.payload;
            });

        default:
            return state;
    }
};
