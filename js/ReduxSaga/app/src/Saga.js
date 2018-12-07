import {takeLatest, put} from 'redux-saga/effects';

function* workerSaga(){
    console.log('workerSaga')
    yield put({type:'ACTION_PLACEHOLDER2'})

}

//watcher
function* rootSaga(){
    console.log('rootSaga')
    yield takeLatest('ACTION_PLACEHOLDER', workerSaga);
    //yield call(workerSaga)
}

export default rootSaga;