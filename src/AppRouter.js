import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Current Pages*/
import LogInPage from './components/Pages/CurrentPages/LogInPage';
import InfoPage from './components/Pages/CurrentPages/InfoPage';
import LearnMorePage from './components/Pages/CurrentPages/LearnMorePage';

/* Upcoming Pages */
import RedirectPage from './components/Pages/UpcomingPages/RedirectPage';
import AboutUsPage from './components/Pages/UpcomingPages/AboutUsPage';
import SettingsPage from './components/Pages/UpcomingPages/SettingsPage';
import PlaylistsPage from './components/Pages/UpcomingPages/PlaylistsPage';
import StatisticsPage from './components/Pages/UpcomingPages/StatisticsPage';
import ArtistsPage from './components/Pages/UpcomingPages/ArtistsPage';

/* Routing */
//import * as ROUTES from './components/Routes/routes';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Switch>
            {/*                         Current Pages                             */}
            <PublicRoute component={LogInPage} path={'/'} exact />
            <PublicRoute component={LearnMorePage}  path="/LearnMore" exact />
            <PublicRoute component={InfoPage}  path="/info" exact />
            
            {/*                        Upcomming Pages                            */}
            <PublicRoute component={RedirectPage} path={'/redirect'} exact />
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