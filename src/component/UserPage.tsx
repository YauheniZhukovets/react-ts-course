import React, {FC, useEffect, useState} from 'react';
import {IUser} from 'types/types';
import axios, {AxiosError} from 'axios';
import {List} from 'component/List';
import {UserItem} from 'component/UserItem';

export const UserPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        void fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        } catch (e) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    return (
        <List items={users}
              renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}
        />
    )
}

