import React from "react";
import propTypes from "prop-types";
import CityOffersList from "./../citiy-offers-list/city-offers-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import {connect} from "react-redux";

const Main = (props) => {
  const {offers} = props;
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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffersList offers={offers}/>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} styles={{width: `100%`}}/>
              </section>
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

const mapStateToProps = (state) => ({
  offers: state.offers
});

export {Main};
export default connect(mapStateToProps)(Main);
