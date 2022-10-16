import React, {FC, PropsWithChildren} from 'react';
import {IUser} from 'types/types';
import {UserItem} from 'component/UserItem';

interface UserListProps {
    users: IUser[]
}


export const UserList: FC<UserListProps & PropsWithChildren> = ({users}) => {

    return (
        <div>
            {users && users.map(user =>
                <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};
