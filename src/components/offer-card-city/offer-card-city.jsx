import React from "react";
import OfferCard from "../offer-card/offer-card";

const MainCard = (props) => {
  return (
    <OfferCard className="cities__place-card" block="cities" {...props}/>
  );
};

export default MainCard;
