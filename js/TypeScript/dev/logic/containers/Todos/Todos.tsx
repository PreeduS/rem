import * as React from 'react';
import {connect} from 'react-redux';
import {useState} from 'react';

import {storeTodos, ITodos} from '../../actions/actions';
import {ComponentAction} from '../../commons/types';

interface IChildPropTypes {
    todos: ITodos[],
    onRemove: (id: number) => void
    onAdd: () => void
    storeTodos: (todos: ITodos[]) => void
}
interface IPropTypes {
    children: ( props: IChildPropTypes ) => JSX.Element,
    storeTodos: (todos: ITodos[]) => void
}


const Todos : ComponentAction<IPropTypes> = (props) => {
    const initialTodos: ITodos[] = [
        {id: 1, title: 'name 1'},
        {id: 2, title: 'name 2'},
        {id: 3, title: 'name 3'},
        {id: 4, title: 'name 4'},
    ];

    const [todos, setTodos] = useState(initialTodos);

    const onRemove = (id: number) => {
        const updatedTodos = todos.filter(x => x.id !== id);
        setTodos(updatedTodos)
    }
    const onAdd = () => {
        const id = todos[todos.length - 1].id + 1;
        let updatedTodos = [
            ...todos,
            {id, title: `test ${id}`}
        ];
        setTodos(updatedTodos)
    }

    const childProps: IChildPropTypes = {
        todos,
        onRemove,
        onAdd,
        storeTodos: props.storeTodos
    }
    return (
        <React.Fragment>
            {props.children(childProps)}
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    storeTodos: (todos: ITodos[]) => dispatch(storeTodos(todos))
});


export default connect(null, mapDispatchToProps)(Todos);
