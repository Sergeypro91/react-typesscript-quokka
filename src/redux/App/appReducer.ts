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
            return {
                ...state,
                counter: state.counter + 1,
            };

        case types.FILL_POST_ASYNC:
            return {
                ...state,
                posts: action.payload,
            };

        default:
            return state;
    }
};
