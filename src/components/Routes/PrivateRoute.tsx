import React from 'react'
import { Route, RouteProps } from 'react-router';
import LoginPage from './LoginPage/LoginPage';

function PrivateRoute(props: RouteProps) {
    const user = true
    return user ? <Route {...props} /> : <LoginPage />
}

export default PrivateRoute;