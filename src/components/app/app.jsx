import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";

const App = (props) => {
  const {rentingOffersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main rentingOffersCount={rentingOffersCount}/>
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/offer/:id?" exact component={Offer} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentingOffersCount: propTypes.number.isRequired
};

export default App;

