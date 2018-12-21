import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducers from './rootReducers';

import rootSaga from './Saga';
const sagaMiddleware = createSagaMiddleWare();


const store = createStore(
    combineReducers({
        ...rootReducers
    }),
    {},
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )

);
sagaMiddleware.run(rootSaga)
store.dispatch({type: 'ACTION_ROOT_1'}); 
store.dispatch({type: 'ACTION_ROOT_1'}); 



export default store;