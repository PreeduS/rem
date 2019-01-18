import * as React from 'react';
import {useState} from 'react';

interface ITodos {
    id: number
    title: string
}
interface IChildPropTypes {
    todos: ITodos[],
    onRemove: (id: number) => ITodos[]
}

interface IPropTypes {
    //children: JSX.Element,
    children: (
        props: IChildPropTypes
    ) => JSX.Element,
}
type TodoAction = (props: IPropTypes) => any;

const Todos : TodoAction = (props) => {
    const initialTodos: ITodos[] = [
        {id: 1, title: 'name 1'},
        {id: 2, title: 'name 2'},
        {id: 3, title: 'name 3'},
        {id: 4, title: 'name 4'},
    ];
    
    const [todos, setTodos] = useState(initialTodos);

    const onRemove = (id: number): ITodos[] => {
        let updatedTodos = [
            ...todos
        ];
        updatedTodos = updatedTodos.filter(x => x.id !== id);
        return updatedTodos;
    }
    return (
        <React.Fragment>
            {props.children({
                todos,
                onRemove
            })}
        </React.Fragment>
    );
}

export default Todos;