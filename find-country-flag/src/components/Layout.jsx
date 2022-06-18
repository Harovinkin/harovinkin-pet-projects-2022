import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main';

export const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};
