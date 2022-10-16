import React, {FC, useEffect, useState} from 'react';
import {ITodos} from 'types/types';
import axios, {AxiosError} from 'axios';
import {List} from 'component/List';
import {TodoItem} from 'component/TodoItem';

export const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodos[]>([])

    useEffect(() => {
        void fetchTodos()
    }, [])


    const fetchTodos = async () => {
        try {
            const resTodos = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: 10
                }
            })
            setTodos(resTodos.data)
        } catch (e) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    return (
        <List items={todos}
              renderItem={(todo: ITodos) => <TodoItem key={todo.id} todo={todo}/>}
        />
    )
}

