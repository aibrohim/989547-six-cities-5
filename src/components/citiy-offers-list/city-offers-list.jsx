import React from "react";
import OffersList from "../offers-list/offers-list";
import Sort from "../sort/sort";
import propTypes from "prop-types";

const CityOffersList = (props) => {
  const {offers} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <Sort />
      <OffersList className="cities__places-list places__list tabs__content" type="city-offers" {...props} />
    </section>
  );
};

CityOffersList.propTypes = {
  offers: propTypes.array.isRequired
};

export default CityOffersList;
