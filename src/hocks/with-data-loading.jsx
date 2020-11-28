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

    componentDidMount() {
      if (this.props.loadOffer && this.props.loadComments && this.props.loadNearbyOffers) {
        const {loadOffer, loadComments, loadNearbyOffers, pathId, discardHoveredOffer} = this.props;
        discardHoveredOffer();
        loadOffer(+pathId);
        loadComments(+pathId);
        loadNearbyOffers(+pathId);
      } else if (this.props.loadBookmarks) {
        const {loadBookmarks} = this.props;
        loadBookmarks();
      } else if (this.props.loadOffers) {
        const {loadOffers} = this.props;
        loadOffers();
      }
      const {isDataLoaded} = this.props;

      if (isDataLoaded) {
        this.setState({
          isDataLoading: false
        });
      }
    }

    componentDidUpdate(prevProps) {
      if (prevProps.pathId !== this.props.pathId) {
        const {loadOffer, loadComments, loadNearbyOffers, pathId, discardHoveredOffer} = this.props;
        document.documentElement.scrollTop = 0;
        loadOffer(+pathId);
        loadComments(+pathId);
        loadNearbyOffers(+pathId);
        discardHoveredOffer();
      }
      const {isDataLoaded} = this.props;
      if (isDataLoaded) {
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
    isDataLoaded: propTypes.bool,
    loadOffer: propTypes.func,
    loadComments: propTypes.func,
    loadNearbyOffers: propTypes.func,
    loadBookmarks: propTypes.func,
    loadOffers: propTypes.func,
    pathId: propTypes.string,
    discardHoveredOffer: propTypes.func
  };

  return WithDataLoading;
};
