import React from "react";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" render={() => {
          return <Main/>;
        }} />
        <PrivateRoute
          exact
          path="/favorites"
          redirectTo="/login"
          type="toFavorites"
          render={() => {
            return <Favorites />;
          }}
        />
        <PrivateRoute
          exact
          path="/login"
          redirectTo="/"
          type="toLogin"
          render={() => {
            return <Login />;
          }}
        />
        <Route path="/offer/:id" exact render={({match}) => {
          const pathId = match.params.id;
          return <Offer pathId={pathId}/>;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

