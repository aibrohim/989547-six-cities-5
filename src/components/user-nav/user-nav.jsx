import React from "react";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../consts";
import propTypes from "prop-types";
import {Link} from "react-router-dom";

const UserNav = ({authorizationStatus, userInfo}) => {
  const profileAccount = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <Link className="header__nav-link header__nav-link--profile" to="/login">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      );
    }
    return (
      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{userInfo.email}</span>
      </Link>
    );
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {profileAccount()}
        </li>
      </ul>
    </nav>
  );
};

UserNav.propTypes = {
  authorizationStatus: propTypes.string.isRequired,
  userInfo: propTypes.shape({
    email: propTypes.string
  })
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userInfo: USER.userInfo
});

export {UserNav};
export default connect(mapStateToProps)(UserNav);
