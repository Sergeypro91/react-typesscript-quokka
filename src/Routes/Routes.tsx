// Core
import React, { memo } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
} from 'react-router-dom';

// Pages
import { WelcomeScreen, Page404 } from './pages';

// Address
import { addres } from './addres';

const RoutesInner = () => (
    <Router>
        <Switch>
            <Route exact path={addres.main}>
                <WelcomeScreen />
            </Route>

            <Route>
                <Page404 />
            </Route>
        </Switch>
    </Router>
);

export const Routes = memo(RoutesInner);
