import React from "react";
import propTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../consts";
import {connect} from "react-redux";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus, type} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (type === `toFavorites`) {
          return (
            authorizationStatus === AuthorizationStatus.AUTH
              ? render(routeProps)
              : <Redirect to={`/login`}/>
          );
        }
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={`/`}/>
            : render(routeProps)
        );
      }}
    />
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

PrivateRoute.propTypes = {
  authorizationStatus: propTypes.string.isRequired,
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
  type: propTypes.string.isRequired
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
