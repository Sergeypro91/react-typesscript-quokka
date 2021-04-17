// Core
import React, { memo } from 'react';

// Store
import { State } from 'redux/store';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Actions
import { appCombineActions } from 'redux/App/appActions';

// Socket
import { socket } from 'App/App';

// Actions
import { uiCombineActions } from 'redux/ui/actions';

// Assets
import { Logo } from 'assets/images/svgr/logo';

// Components
import { Spiner } from 'components/Spiner/Spiner';

// Style
import './ReactStart.scss';

const ReactStartInner = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state: State) => state.app, shallowEqual);
    const { isFetching, isSocketConnected } = useSelector(
        (state: State) => state.ui,
        shallowEqual,
    );

    const counterIncrement = () => {
        dispatch(appCombineActions.plusOne());
    };

    const fetchPosts = () => {
        dispatch(appCombineActions.fetchPostAsync());
    };

    const socketSend = () => {
        if (isSocketConnected) {
            const test = {
                contractor_type: 3,
                inn: '402914238850',
                fromId: 0,
            };

            const SocketSendObj = {
                socket,
                message: JSON.stringify(test),
            };

            dispatch(uiCombineActions.socketSend(SocketSendObj));
        }
    };

    return (
        <div className="app">
            <header className="app-header">
                <div className="app-logo">
                    <Logo />
                </div>

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>

                <button
                    type="button"
                    className="btn btn--plus"
                    onClick={counterIncrement}>
                    Plus, {counter}
                </button>

                <button
                    type="button"
                    className="btn btn--fetch"
                    onClick={fetchPosts}>
                    <span className="fetch-btn__wrapper">
                        <span>Get posts</span>

                        <Spiner isFetching={isFetching} />
                    </span>
                </button>

                <button
                    type="button"
                    className="btn btn--ws"
                    onClick={socketSend}>
                    <span>Send message throw WebSocket</span>
                </button>
            </header>
        </div>
    );
};

export const ReactStart = memo(ReactStartInner);
