import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import {UserPage} from 'component/UserPage';
import {TodosPage} from 'component/TodosPage';
import {UserItemPage} from 'component/UserItemPage';


export const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to={'/users'}>Пользователи</NavLink>
                    <NavLink to={'/todos'}>Список дел</NavLink>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/user/:id'} element={<UserItemPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}