import React from "react";
import SortOffersComponent from "../sort-offers-component/sort-offers-component";
import propTypes from "prop-types";
import {connect} from "react-redux";
import MainCard from "../offer-card-city/offer-card-city";

const CityOffersList = (props) => {
  const {offers, activeCity} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {activeCity}</b>
      <SortOffersComponent />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <MainCard key={offer.id} offer={offer}/>)}
      </div>
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

