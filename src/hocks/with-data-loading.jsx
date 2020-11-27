import React from "react";
import Loader from "../components/loading/loading";
import propTypes from "prop-types";
import browserHistory from "../browser-history";

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
        const {loadOffer, loadComments, loadNearbyOffers, pathId} = this.props;
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

    componentDidUpdate() {
      const {isDataLoaded} = this.props;
      if (!(browserHistory.location.pathname === `/favorites`)) {
        document.documentElement.scrollTop = 0;
      }
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
    pathId: propTypes.string
  };

  return WithDataLoading;
};
