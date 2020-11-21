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
      const isOfferAvailable = Boolean(Array.from(Object.entries(this.props.offer)).length >= 1);
      if (isOfferAvailable && this.props.comments && this.props.nearbyHotels.length > 1) {
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
    offer: propTypes.object.isRequired,
    comments: propTypes.array.isRequired,
    nearbyHotels: propTypes.array.isRequired
  };

  return WithDataLoading;
};
