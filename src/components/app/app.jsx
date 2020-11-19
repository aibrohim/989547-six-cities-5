import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/offer/:id" exact render={({match}) => {
          return <Offer pathId={match.params.id}/>;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: propTypes.array
};

export default App;

