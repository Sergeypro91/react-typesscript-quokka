import { AppState, AppActions, PLUS_ONE } from './appTypes';

const initialState = {
    counter: 0,
};

export const appReducer = (
    state = initialState,
    action: AppActions,
): AppState => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                ...state,
                counter: state.counter + 1,
            };

        default:
            return state;
    }
};
