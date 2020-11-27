import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {withDataLoading} from "../../hocks/with-data-loading";
import BookmarkCard from "../offer-card-bookmark/offer-card-bookmark";
import {getOffersByCity} from "../../store/reducers/app-data/app-data";
import propTypes from "prop-types";
import classNames from "classnames";

const Favorites = (props) => {
  const bookmarks = getOffersByCity(props.bookmarks);
  const userInfo = props.userInfo;
  const favorites = () => {
    const favoritesContainer = [];
    let initialIndex = 0;

    bookmarks.forEach((value, key) => {
      favoritesContainer.push({
        city: key,
        id: `${initialIndex}${key}`,
        offers: value
      });
      initialIndex++;
    });
    return favoritesContainer;
  };

  const renderContent = () => {
    if (bookmarks.size === 0) {
      return (
        <Fragment>
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favorites().map((offersByCity) => {
            return (
              <li key={offersByCity.id} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{offersByCity.city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    offersByCity.offers.map((offer) => {
                      return <BookmarkCard key={offer.id} offer={offer}/>;
                    })
                  }
                </div>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  };

  const mainSectionClass = bookmarks.size === 0
    ? `favorites--empty`
    : ``;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userInfo.email}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className={classNames(`favorites`, mainSectionClass)}>
            {renderContent()}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
};

const mapStateToProps = ({USER, DATA}) => ({
  isDataLoaded: USER.isUserStatusLoaded && DATA.areBookmarksLoaded,
  bookmarks: DATA.bookmarks,
  userInfo: USER.userInfo,
});

Favorites.propTypes = {
  bookmarks: propTypes.array.isRequired,
  userInfo: propTypes.object.isRequired
};

export {Favorites};
export default connect(mapStateToProps)(withDataLoading(Favorites));
