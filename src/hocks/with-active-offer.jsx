import React, {PureComponent} from "react";

export const withActiveOffer = (Component) => {
  return class WithActiveOffer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeOffer: null
      };

      this._setActiveOffer = this._setActiveOffer.bind(this);
    }

    _setActiveOffer(offer) {
      this.setState({
        activeOffer: offer
      });
    }

    _renderOffers(offers, OfferComponent) {
      return offers.map((offer) =>
        <OfferComponent key={offer.id} offer={offer} onHover={() => this._setActiveOffer(offer)} />
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          renderOffers={this._renderOffers}
        />
      );
    }
  };
};

