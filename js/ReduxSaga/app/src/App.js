import React from 'react';
import store from './Store';
import {Provider} from 'react-redux';

import DispatchByOrder from './Components/DispatchByOrder';
import DispatchEx from './Components/DispatchEx';

const App = () => (
    <Provider store = {store}>
        <DispatchByOrder />
        <DispatchEx />
    </Provider>
);

export default App;