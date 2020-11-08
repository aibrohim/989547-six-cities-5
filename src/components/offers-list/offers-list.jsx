import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MainCard from "../offer-card-city/offer-card-city";
import NearCard from "../offer-card-near/offer-card-near";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";

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
    const {hoverOffer} = this.props;
    hoverOffer(offer);
    this.setState({
      activeOffer: offer
    });
  }

  renderOffers(offers, Component) {
    return offers.map((offer) =>
      <Component key={offer.id} offer={offer} onHover={() => this.setActiveOffer(offer)} />
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
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hoverOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return ({
    hoveredOffer: state.hoveredOffer
  });
};

const mapDispatchToProps = (dispatch) => ({
  hoverOffer(offer) {
    dispatch(ActionCreator.hoverOffer(offer));
  }
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
