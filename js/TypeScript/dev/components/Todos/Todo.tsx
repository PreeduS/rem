import * as React from 'react';

interface IPropTypes {
    title: string,
    onRemove: () => void,
}

const Todo = (props: IPropTypes) => {
    const {title, onRemove} = props;
    return (
        <div>
            <span>{title}</span> 
            <span onClick = {onRemove}>X</span>
        </div>
    );
}

export default Todo;