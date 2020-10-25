import React from "react";
import OffersList from "../offers-list/offers-list";

const CityOffersList = (props) => {
  return (
    <OffersList className="cities__places-list places__list tabs__content" type="city-offers" {...props} />
  );
};

export default CityOffersList;
