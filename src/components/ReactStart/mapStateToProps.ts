// Store
import { State } from 'redux/store';

// Selectors
import { getCounter } from 'redux/App/appSelectors';
import { getIsFetching, getIsSocketConnected } from 'redux/ui/uiSelectors';

// Types
import { MapStateToPropsType } from './reactStartTypes';

export const mapStateToProps = (state: State): MapStateToPropsType => ({
    counter: getCounter(state),
    isFetching: getIsFetching(state),
    isSocketConnected: getIsSocketConnected(state),
});
