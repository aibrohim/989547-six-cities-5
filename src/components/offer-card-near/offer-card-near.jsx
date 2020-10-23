import React from "react";
import OfferCard from "../offer-card/offer-card";

const NearCard = (props) => {
  return (
    <OfferCard className="near-places__card" block="near-places" {...props}/>
  );
};

export default NearCard;
