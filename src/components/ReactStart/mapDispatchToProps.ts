// Core
import React from 'react';

// Types
import { AppActions } from 'redux/App/appTypes';
import { UiActions, SocketSendObj } from 'redux/ui/types';

// Actions
import { appCombineActions } from 'redux/App/appActions';
import { uiCombineActions } from 'redux/ui/actions';

import { MapDispatchToPropsType } from './reactStartTypes';

export const mapDispatchToProps = (
    dispatch: React.Dispatch<AppActions | UiActions>,
): MapDispatchToPropsType => ({
    plusOne: () => dispatch(appCombineActions.plusOne()),
    fetchPostAsync: () => dispatch(appCombineActions.fetchPostAsync()),
    socketSend: (socketSendObj: SocketSendObj) =>
        dispatch(uiCombineActions.socketSend(socketSendObj)),
});
