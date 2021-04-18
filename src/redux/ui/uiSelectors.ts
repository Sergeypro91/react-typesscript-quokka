// State
import { State } from 'redux/store';

export const getIsFetching = (state: State) => state.ui.isFetching;

export const getIsSocketConnected = (state: State) =>
    state.ui.isSocketConnected;
