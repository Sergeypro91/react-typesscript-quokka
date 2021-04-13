// Core
import React, { memo } from 'react';

// Store
import { State } from 'redux/store';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Actions
import { appCombineActions } from 'redux/App/appActions';

// Assets
import { Logo } from 'assets/images/svgr/logo';

// Components
import { Spiner } from 'components/Spiner/Spiner';

// Style
import './ReactStart.scss';

const ReactStartInner = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state: State) => state.app, shallowEqual);
    const { isFetching } = useSelector(
        (state: State) => state.ui,
        shallowEqual,
    );

    const counterIncrement = () => {
        dispatch(appCombineActions.plusOne());
    };

    const fetchPosts = () => {
        dispatch(appCombineActions.fetchPostAsync());
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

                <button type="button" onClick={counterIncrement}>
                    Plus, {counter}
                </button>

                <button
                    type="button"
                    className="fetch-btn"
                    onClick={fetchPosts}>
                    <span className="fetch-btn__wrapper">
                        <span>Get posts</span>

                        <Spiner isFetching={isFetching} />
                    </span>
                </button>
            </header>
        </div>
    );
};

export const ReactStart = memo(ReactStartInner);
