import * as React from 'react';

type PropTypes = {
    title: string,
    onRemove: () => void,
}

const Todo = (props: PropTypes) => {
    const {title, onRemove} = props;
    return (
        <div>
            <span>{title}</span>
            <span onClick = {onRemove}>X</span>
        </div>
    );
}

export default Todo;