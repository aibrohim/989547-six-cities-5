import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

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

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <OfferCard
            offer={offer}
            key={offer.id}
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
