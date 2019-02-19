import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducers from '../reducers/rootReducers';

import rootSaga from '../rootSaga';
const sagaMiddleware = createSagaMiddleWare();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any
    }
}

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


export default store;