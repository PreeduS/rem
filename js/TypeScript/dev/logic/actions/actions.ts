import * as actionTypes from '../actionTypes';

export interface ITodos {
    id: number
    title: string
}

export const storeTodos = (todos:ITodos[]): actionTypes.StoreTodos => ({
    type: actionTypes.storeTodos,
    todos,
});