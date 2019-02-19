import * as React from 'react';
import store from '../logic/store/store';
import {Provider} from 'react-redux';
import Todos from '../components/Todos/Todos';

class App extends React.Component<any,any>{
    render(){
        return (
            <Provider store = {store}>
                <Todos />
            </Provider>
        );
    }
}

export default App;

