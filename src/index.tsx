// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';

// Actions
import { socketCombineActions } from 'redux/socket/actions';

// Socket
import { setupSocket } from 'redux/socket';

// Components
import App from 'App/App';

// Styles
import './index.scss';

import reportWebVitals from './reportWebVitals';

export const socket = setupSocket(store.dispatch, socketCombineActions);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,

    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
