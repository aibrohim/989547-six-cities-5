import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SmallOffer from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
  }

  setActiveOffer(offer) {
    console.log(offer);
    this.setState({
      activeOffer: offer
    });
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) =>
          <SmallOffer
            offer={offer}
            key={index}
            onHover={() => this.setActiveOffer(offer)}
          />
        )}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array
};

export default OffersList;
