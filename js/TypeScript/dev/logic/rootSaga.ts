import {all} from 'redux-saga/effects';
import todos from './actions/todos';

//watcher
function* rootSaga(){

    yield all([
        //yield takeLatest('ACTION_ROOT_2', dispatchByOrder),
        todos(),
    ]);
    

    
}

export default rootSaga;