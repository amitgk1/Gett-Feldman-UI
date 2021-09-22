import React, { useRef } from 'react'
import { Route, RouteProps } from 'react-router';
import { UserRef } from '../../context/user';
import LoginPage from './LoginPage/LoginPage';

function PrivateRoute(props: RouteProps) {
    const user = useRef(UserRef);
    return user ? <Route {...props} /> : <LoginPage />
}

export default PrivateRoute;