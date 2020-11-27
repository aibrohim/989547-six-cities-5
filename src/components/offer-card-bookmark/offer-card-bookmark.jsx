import React from "react";
import OfferCard from "../offer-card/offer-card";

const BookmarkCard = (props) => {
  return (
    <OfferCard className="favorites__card" block="favorites" imgWidth="150" imgHeight="110" {...props}/>
  );
};

export default BookmarkCard;
