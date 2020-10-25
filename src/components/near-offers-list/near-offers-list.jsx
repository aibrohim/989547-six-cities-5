import React from "react";
import OffersList from "../offers-list/offers-list";

const NearOffersList = (props) => {
  return (
    <OffersList className="near-places__list places__list" type="near-offers" {...props} />
  );
};

export default NearOffersList;
