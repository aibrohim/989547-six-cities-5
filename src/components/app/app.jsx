import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import {connect} from "react-redux";
import {getComments, getOfferById, getNearbyOffers} from "../../store/api-action.js";

const App = ({loadComments, loadOffer, loadNearbyOffers}) => {
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
          const pathId = match.params.id;
          loadOffer(+pathId);
          loadComments(+pathId);
          loadNearbyOffers(+pathId);
          return <Offer pathId={pathId}/>;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  loadComments: propTypes.func.isRequired,
  loadOffer: propTypes.func.isRequired,
  loadNearbyOffers: propTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(getComments(id));
  },
  loadOffer(id) {
    dispatch(getOfferById(id));
  },
  loadNearbyOffers(id) {
    dispatch(getNearbyOffers(id));
  }
});

export {App};
export default connect(null, mapDispatchToProps)(App);

