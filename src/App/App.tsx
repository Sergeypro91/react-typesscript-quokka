// Core
import React, { useEffect } from 'react';

// Routes
import { Routes } from 'Routes/Routes';

// Webckote
import { joinSocketChannel } from 'redux/socket';

const App = () => {
    useEffect(() => {
        joinSocketChannel();
    }, []);

    return <Routes />;
};

export default App;
