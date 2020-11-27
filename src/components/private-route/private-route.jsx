import React from "react";
import propTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../consts";
import {connect} from "react-redux";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus, type, isUserStatusLoaded} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (type === `toFavorites`) {
          return (
            authorizationStatus === AuthorizationStatus.AUTH || !(isUserStatusLoaded)
              ? render(routeProps)
              : <Redirect to={`/login`}/>
          );
        } else {
          return (
            authorizationStatus === AuthorizationStatus.AUTH
              ? <Redirect to={`/`}/>
              : render(routeProps)
          );
        }
      }}
    />
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  isUserStatusLoaded: USER.isUserStatusLoaded
});

PrivateRoute.propTypes = {
  authorizationStatus: propTypes.string.isRequired,
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  isUserStatusLoaded: propTypes.bool.isRequired
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
