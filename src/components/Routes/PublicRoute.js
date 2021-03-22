import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
//import { ROUTES } from '../constants';

interface PublicRouteProps {
    restricted?: boolean;
}

function PublicRoute(props: PublicRouteProps & RouteProps): React.ReactElement {
    const { component: Component, restricted = false, ...rest } = props;

    const render = props => {
        if ( !( localStorage.getItem('access_token') === null || 
                localStorage.getItem('access_token') === 'undefined') && restricted ) {
            return <Redirect to={'/playlists'} />;
        }

        return <Component {...props} />;
    };

    return <Route {...rest} render={render} />;
}

export default PublicRoute;