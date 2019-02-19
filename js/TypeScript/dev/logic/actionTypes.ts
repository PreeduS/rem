/*
//request types
interface IStatus {
    pending: '_PENDING',
    fulfilled: '_FULFILLED',
    rejected: '_REJECTED',  
}
export const status: IStatus = {
    pending: '_PENDING',
    fulfilled: '_FULFILLED',
    rejected: '_REJECTED',
}*/

//store data in redux
export const typeA = 'typeA';
export const typeB = 'typeB';

//TodosReducer
export const storeTodos = 'STORE_TODOS';


//return types for each action
//split by reducers?
export type TypeA = ActionType<typeof typeA>;
export type TypeB = ActionType<typeof typeB, {data: string}>;


//TodosReducer
export type StoreTodos = ActionType<typeof storeTodos, {
    todos: Object
}>;

export type ActionType<Type, Payload = undefined> = {type: Type} & (Payload extends undefined ? {} : Payload );              //{payload: Payload}

