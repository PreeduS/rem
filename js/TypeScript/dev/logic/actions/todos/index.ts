import {takeLatest, takeEvery, take, put, select, call, all ,fork} from 'redux-saga/effects';
import * as actionTypes from '../../actionTypes';
import {ITodos} from '../actions';

function* storeTodos(action: actionTypes.StoreTodos){
    console.log('storeTodos action ... ',action)
    //yield put({type: actionTypes.storeTodos})
   /* yield put<actionTypes.StoreTodos>({
        type: actionTypes.storeTodos, 
       // payload: { todos:{} }
        todos:{} 
    });*/


}

export default function* (){
    yield takeLatest(actionTypes.storeTodos, storeTodos)
}