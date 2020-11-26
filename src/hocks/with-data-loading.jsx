import React from "react";
import Loader from "../components/loading/loading";
import propTypes from "prop-types";
import {AuthorizationStatus} from "../consts";

export const withDataLoading = (Component) => {
  class WithDataLoading extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isDataLoading: true
      };
    }

    componentDidMount() {
      const {isOfferLoaded, isCommentsLoaded, isNearbyOffersLoaded, isDataLoaded} = this.props;

      if (
        (isOfferLoaded && isCommentsLoaded && isNearbyOffersLoaded)
        || isDataLoaded
      ) {
        this.setState({
          isDataLoading: false
        });
      }
    }

    componentDidUpdate() {
      const {isOfferLoaded, isCommentsLoaded, isNearbyOffersLoaded, isDataLoaded} = this.props;

      if (
        (isOfferLoaded && isCommentsLoaded && isNearbyOffersLoaded)
        || isDataLoaded
      ) {
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
    isOfferLoaded: propTypes.bool,
    isCommentsLoaded: propTypes.bool,
    isNearbyOffersLoaded: propTypes.bool,
    isDataLoaded: propTypes.bool
  };

  return WithDataLoading;
};
