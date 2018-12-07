import React from 'react';
import store from './Store';
import {Provider} from 'react-redux';

const App = () => (
    <Provider store = {store}>
        app
    </Provider>
);

export default App;