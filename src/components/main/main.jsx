import React from "react";
import propTypes from "prop-types";
import CityOffersList from "./../citiy-offers-list/city-offers-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import {connect} from "react-redux";
import CitiesEmpty from "../cities-empty/cities-empty";
import classNames from "classnames";
import UserNav from "../user-nav/user-nav";

const Main = (props) => {
  const {offers} = props;

  const noOffersClasses = {
    mainEmpty: ``,
    citiesContainerEmpty: ``
  };

  const noOffers = offers.length === 0;

  if (noOffers) {
    noOffersClasses.mainEmpty = `page__main--index-empty`;
    noOffersClasses.citiesContainerEmpty = `cities__places-container--empty`;
  }

  const mapSection = () => {
    if (noOffers) {
      return ``;
    }
    return (
      <section className="cities__map map">
        <Map offers={offers} styles={{width: `100%`}}/>
      </section>
    );
  };

  const offersListBlock = () => {
    if (noOffers) {
      return <CitiesEmpty />;
    }
    return <CityOffersList offers={offers}/>;
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <UserNav />
          </div>
        </div>
      </header>

      <main className={classNames(`page__main page__main--index`, noOffersClasses.mainEmpty)}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList/>
        </div>
        <div className="cities">
          <div className={classNames(`cities__places-container container`, noOffersClasses.citiesContainerEmpty)}>
            {offersListBlock()}
            <div className="cities__right-section">
              {mapSection()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: propTypes.array.isRequired
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers
});

export {Main};
export default connect(mapStateToProps)(Main);
