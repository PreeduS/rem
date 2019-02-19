//import initialState, {IInitialState} from './initialState';

import * as actionTypes from '../../actionTypes';
//import {appLoadingPendingType, loginPendingType} from '../actions/example';



//temp, externa
//type typeA = actionTypes.ActionType<typeof actionTypes.typeA>;
//type typeB = actionTypes.ActionType<typeof actionTypes.typeB, {data: string}>;

type actionReturnTypes = actionTypes.TypeA | 
                        actionTypes.TypeB |
                        actionTypes.StoreTodos;

const TodosReducer = (state = {}, action : actionReturnTypes) =>{
    switch(action.type){
        case actionTypes.typeA: { 
            return state;
        }
        case actionTypes.typeB: {
            return state;
        }
        case actionTypes.storeTodos: {
            return {
                ...state,
                todos: action.todos
            };
        }
    }
    return state;
}


export default TodosReducer;