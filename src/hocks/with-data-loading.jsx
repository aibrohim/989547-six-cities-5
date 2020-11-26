import React from "react";
import Loader from "../components/loading/loading";
import propTypes from "prop-types";

export const withDataLoading = (Component) => {
  class WithDataLoading extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isDataLoading: true
      };
    }

    componentDidUpdate() {
      const {isOfferLoaded, isCommentsLoaded, isNearbyOffersLoaded} = this.props;
      if (isOfferLoaded && isCommentsLoaded && isNearbyOffersLoaded) {
        this.setState({
          isDataLoading: false
        });
      }
    }

    render() {
      if (this.state.isDataLoading) {
        return <Loader />;
      }
      return <Component {...this.props}/>;
    }
  }

  WithDataLoading.propTypes = {
    isOfferLoaded: propTypes.bool.isRequired,
    isCommentsLoaded: propTypes.bool.isRequired,
    isNearbyOffersLoaded: propTypes.bool.isRequired
  };

  return WithDataLoading;
};
