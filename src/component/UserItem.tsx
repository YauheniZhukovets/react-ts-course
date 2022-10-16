import React, {FC} from 'react';
import {IUser} from 'types/types';
import {NavLink} from 'react-router-dom';

interface UserProps {
    user: IUser
}

export const UserItem: FC<UserProps> = ({user}) => {

    return (
        <div>
            <div style={{padding: 15, marginTop: 10, border: '2px solid gray'}}
            >
                {user.id}. {user.name} проживает по
                адресу г.{user.address.city},
                ул.{user.address.street}, {user.address.suite}

                <div>
                    <NavLink to={`/user/${user.id}`}><button>Открыть</button></NavLink>
                </div>
            </div>
        </div>
    )
}