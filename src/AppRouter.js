import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogInPage from './components/Pages/LogInPage';
import RedirectPage from './components/Pages/RedirectPage';
import AboutUsPage from './components/Pages/AboutUsPage';
import SettingsPage from './components/Pages/SettingsPage';
import PlaylistsPage from './components/Pages/PlaylistsPage';
import StatisticsPage from './components/Pages/StatisticsPage';
import ArtistsPage from './components/Pages/ArtistsPage';
import InfoPage from './components/Pages/InfoPage';
//import { ROUTES } from './components/Routes/routes';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Switch>
            <PublicRoute component={LogInPage} path={'/'} exact />
            <PublicRoute component={RedirectPage} path={'/redirect'} exact />
            <PublicRoute component={InfoPage}  path="/info" exact />
            <PrivateRoute component={AboutUsPage} path={'/about'} exact />
            <PrivateRoute component={SettingsPage} path={'/settings'} exact />
            <PrivateRoute component={PlaylistsPage} path={'/playlists'} exact />
            <PrivateRoute component={StatisticsPage} path={'/statistics'} exact />
            <PrivateRoute component={ArtistsPage} path={'/artists'} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;