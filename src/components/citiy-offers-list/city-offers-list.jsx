import React from "react";
import OffersList from "../offers-list/offers-list";
import Sort from "../sort/sort";
import propTypes from "prop-types";
import {connect} from "react-redux";

const CityOffersList = (props) => {
  const {offers, activeCity} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {activeCity}</b>
      <Sort />
      <OffersList className="cities__places-list places__list tabs__content" type="city-offers" {...props} />
    </section>
  );
};

const mapStateToProps = ({DATA}) => ({
  activeCity: DATA.activeCity
});

CityOffersList.propTypes = {
  offers: propTypes.array.isRequired,
  activeCity: propTypes.string.isRequired
};

export {CityOffersList};
export default connect(mapStateToProps)(CityOffersList);

