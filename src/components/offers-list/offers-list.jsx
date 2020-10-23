import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MainCard from "../offer-card-city/offer-card-city";
import NearCard from "../offer-card-near/offer-card-near";

const listTypesClasses = {
  cityOffers: `city-offers`,
  nearOffers: `near-offers`
};

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
  }

  setActiveOffer(offer) {
    this.setState({
      activeOffer: offer
    });
  }

  renderOffers(offers, Component) {
    return offers.map((offer) =>
      <Component key={offer.id} offer={offer} />
    );
  }

  render() {
    const {offers, type} = this.props;

    switch (type) {
      case listTypesClasses.cityOffers:
        return (
          <div className={this.props.className}>
            {this.renderOffers(offers, MainCard)}
          </div>
        );
      case listTypesClasses.nearOffers:
        return (
          <div className={this.props.className}>
            {this.renderOffers(offers, NearCard)}
          </div>
        );
      default: return null;
    }
  }
}

OffersList.propTypes = {
  offers: PropTypes.array,
  className: PropTypes.string,
  type: PropTypes.string
};

export default OffersList;
