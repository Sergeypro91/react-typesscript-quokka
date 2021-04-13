// Core
import React, { memo } from 'react';

// Store
import { State } from 'redux/store';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// Actions
import { plusOne } from 'redux/App/appActions';

// Assets
import logo from 'assets/images/svg/logo.svg';

// Style
import './ReactStart.scss';

const ReactStartInner = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state: State) => state.app, shallowEqual);

    const counterIncrement = () => {
        dispatch(plusOne());
    };
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />

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
            </header>
        </div>
    );
};

export const ReactStart = memo(ReactStartInner);
