import React, {FC, useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {IUser} from 'types/types';
import axios, {AxiosError} from 'axios';

export const UserItemPage: FC = () => {

    const {id} = useParams<string>()

    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        void fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const res = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(res.data)
        } catch (e) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    return (
        <>
            {
                <div style={{padding: 5, marginTop: 20, border: '5px solid gray'}}
                >
                    <NavLink to={'/users'}><button>Назад</button></NavLink>
                    <h3>{user?.name}</h3> проживает по
                    адресу г.{user?.address.city},
                    ул.{user?.address.street}, {user?.address.suite}
                </div>
            }
        </>
    )
}

