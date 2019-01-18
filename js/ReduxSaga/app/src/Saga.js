import { delay } from 'redux-saga'
import {takeLatest, takeEvery, take, put, select, call, all ,fork} from 'redux-saga/effects';

const someAsyncFunc = async () => {
    
    try{
        //yield delay(2000);
        //let response = {data: 'someData'};
        //yield put({pending...})
        //yield put({fulfilled...})
        
    }catch(e){
        //yield put({rejected...})
    }
}

function* fetchData(action) {
    try {
       //const data = yield call(Api.fetchUser, action.payload.url)
       const data = {data: 'someData'};
       yield put({type: "FETCH_SUCCEEDED", data})
    } catch (error) {
       yield put({type: "FETCH_FAILED", error})
    }
 }

function* watchFetchData() {
    yield takeEvery('FETCH_REQUESTED', fetchData)
}


function* workerSaga(){
    console.log('workerSaga')
    yield put({type:'ACTION_PLACEHOLDER2'})

    //let storeData = select(state => state.someData);  //selector function
    //yield call(someAsyncFunc, storeData)                   //func, ...args


}


/*
blocking:
take
call

non blocking:
takeEvery
takeLatest
put
fork
spawn
*/

function* allOrdersReached(){
    console.log('allOrdersReached')
    yield put({type:'ACTION_ALL_ORDERS_REACHED'})
}

function* dispatchByOrder(){
    console.log('dispatchByOrder');
    while(true){
        yield take('ACTION_BY_ORDER_A');
        console.log('ACTION_BY_ORDER_A');
        yield take('ACTION_BY_ORDER_B');
        console.log('ACTION_BY_ORDER_A, ACTION_BY_ORDER_B');
        yield take('ACTION_BY_ORDER_C');
    
        yield call(allOrdersReached)    
    }

}

function* pageA1(){
    console.log('ACTION_PAGE_A_1')
}
function* pageA2(data){
    console.log('ACTION_PAGE_A_2, ',data)
}
function* pageARoot(){
    console.log('pageARoot');
    yield take('ACTION_PAGE_A_INIT')
    yield takeLatest('ACTION_PAGE_A_1', pageA1)
    yield takeLatest('ACTION_PAGE_A_2', pageA2,'param pageA1')
}

//watcher
function* rootSaga(){
   // yield takeLatest('ACTION_ROOT_1', workerSaga);
    //yield takeLatest('ACTION_ROOT_2', dispatchByOrder);

    
        //all - run multiple effects in parallel and wait for all of them to complete
        //for takeLatest, loops etc inside - this will never complete
        yield all([
            //yield takeLatest('ACTION_ROOT_2', dispatchByOrder),
            dispatchByOrder(),
            pageARoot(),
        ]);
        
        //yield fork(dispatchByOrder)
        //yield fork(pageARoot)
        
        yield takeLatest('*',function* (){console.log('last')})
    
}

export default rootSaga;