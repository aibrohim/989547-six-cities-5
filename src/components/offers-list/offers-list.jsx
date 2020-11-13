import React from "react";
import PropTypes from "prop-types";
import MainCard from "../offer-card-city/offer-card-city";
import NearCard from "../offer-card-near/offer-card-near";
import {withActiveOffer} from "../../hocks/with-active-offer";

const listTypesClasses = {
  cityOffers: `city-offers`,
  nearOffers: `near-offers`
};

const OffersList = (props) => {
  const {renderOffers, className, offers, type} = props;

  switch (type) {
    case listTypesClasses.cityOffers:
      return (
        <div className={className}>
          {renderOffers(offers, MainCard)}
        </div>
      );
    case listTypesClasses.nearOffers:
      return (
        <div className={className}>
          {renderOffers(offers, NearCard)}
        </div>
      );
    default: return null;
  }
};

OffersList.propTypes = {
  renderOffers: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default withActiveOffer(OffersList);
