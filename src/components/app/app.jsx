import React from "react";
import propTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import {connect} from "react-redux";
import {getComments, getOfferById, getNearbyOffers, fetchOffersList, fetchBookmarks} from "../../store/api-action.js";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = ({loadComments, loadOffer, loadNearbyOffers, loadOffers, loadBookmars}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" render={() => {
          loadOffers();
          return <Main/>;
        }} />
        <PrivateRoute
          exact
          path="/favorites"
          redirectTo="/login"
          type="toFavorites"
          render={() => {
            loadBookmars();
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
  loadNearbyOffers: propTypes.func.isRequired,
  loadOffers: propTypes.func.isRequired,
  loadBookmars: propTypes.func.isRequired
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
  },
  loadOffers() {
    dispatch(fetchOffersList());
  },
  loadBookmars() {
    dispatch(fetchBookmarks());
  }
});

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

