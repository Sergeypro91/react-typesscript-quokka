// Core
import React, { useEffect, memo } from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Redirect,
} from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

// Store
import { State } from 'redux/store';

// Pages
import { WelcomeScreen, Page404 } from './pages';

const RoutesInner = () => {
    const { counter } = useSelector((state: State) => state.app, shallowEqual);

    useEffect(() => {
        console.log(counter);
    }, []);

    return (
        <Router>
            <Route exact path="/">
                <WelcomeScreen />
            </Route>

            <Route>
                <Page404 />
            </Route>
        </Router>
    );
};

export const Routes = memo(RoutesInner);
