// Core
import React, { memo } from 'react';

// Socket
import { socket } from 'App/App';

// Assets
import { Logo } from 'assets/images/svgr/logo';

// Components
import { Spiner } from 'components/Spiner/Spiner';

// Store
import { connect } from 'react-redux';

// Types
import { ReactStartTypes } from './reactStartTypes';

// MapToProps
import { mapStateToProps } from './mapStateToProps';
import { mapDispatchToProps } from './mapDispatchToProps';

// Style
import './ReactStart.scss';

const ReactStartInner: React.FC<ReactStartTypes> = ({
    counter,
    isFetching,
    isSocketConnected,
    plusOne,
    fetchPostAsync,
    socketSend,
}) => {
    const sendMessage = () => {
        if (isSocketConnected) {
            const test = {
                contractor_type: 3,
                inn: '402914238850',
                fromId: 0,
            };

            const socketSendObj = {
                socket,
                message: JSON.stringify(test),
            };

            socketSend(socketSendObj);
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
                    onClick={plusOne}>
                    Plus, {counter}
                </button>

                <button
                    type="button"
                    className="btn btn--fetch"
                    onClick={fetchPostAsync}>
                    <span className="fetch-btn__wrapper">
                        <span>Get posts</span>

                        <Spiner isFetching={isFetching} />
                    </span>
                </button>

                <button
                    type="button"
                    className="btn btn--ws"
                    onClick={sendMessage}>
                    <span>Send message throw WebSocket</span>
                </button>
            </header>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(ReactStartInner));
