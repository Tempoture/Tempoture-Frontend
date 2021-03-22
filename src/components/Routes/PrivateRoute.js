import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
//import { ROUTES } from '/routes';

function PrivateRoute(props: RouteProps): React.ReactElement {
    const { component: Component, ...rest } = props;


    const render = props => {
        if (localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === 'undefined') {
            return <Redirect to={'/'} />;
        }

        return <Component {...props} />;
    };

    return <Route {...rest} render={render} />;
}

export default PrivateRoute;