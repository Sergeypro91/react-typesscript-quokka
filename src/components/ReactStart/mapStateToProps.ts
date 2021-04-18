// Store
import { State } from 'redux/store';

// Selectors
import {
    getCounter,
    getIsFetching,
    getIsSocketConnected,
} from 'redux/App/appSelectors';

// Types
import { MapStateToPropsType } from './reactStartTypes';

export const mapStateToProps = (state: State): MapStateToPropsType => ({
    counter: getCounter(state),
    isFetching: getIsFetching(state),
    isSocketConnected: getIsSocketConnected(state),
});
