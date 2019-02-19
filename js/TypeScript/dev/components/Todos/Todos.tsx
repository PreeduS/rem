import * as React from 'react';
import TodosContainer from '../../logic/containers/Todos/Todos';
import Todo from './Todo';

class Todos extends React.Component<any,any>{
    render(){
        return (
            <TodosContainer>
                {props => { 
                    return (
                        <div>
                            {props.todos.map(todo =>
                                <Todo
                                    key = {todo.id}
                                    title = {todo.title}
                                    onRemove = {() => props.onRemove(todo.id)}
                                />
                            )}
                            <br />
                            <button onClick = { () => props.onAdd() }>Add</button>
                            <button onClick = { () => props.storeTodos(props.todos) }>StoreTodos</button>
                        </div>
                    );
                }}
            </TodosContainer>
        );
    }
}


export default Todos;