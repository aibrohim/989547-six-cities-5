import React from "react";
import OfferCard from "../offer-card/offer-card";

const NearCard = (props) => {
  return (
    <OfferCard className="near-places__card" block="near-places" imgWidth="260" imgHeight="200" {...props}/>
  );
};

export default NearCard;
