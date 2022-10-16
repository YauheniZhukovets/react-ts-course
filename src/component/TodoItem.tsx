import React, {FC} from 'react';
import {ITodos} from 'types/types';

interface TodoProps {
    todo: ITodos
}

export const TodoItem: FC<TodoProps> = ({todo}) => {

    return (
        <div>
            <div style={{padding: 4, marginTop: 4, border: '1px solid black'}}
            >
                {todo.id}. {todo.title}
                <input type="checkbox" checked={todo.completed}/>
            </div>
        </div>
    )
}