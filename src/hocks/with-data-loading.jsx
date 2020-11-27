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
      const {isDataLoaded} = this.props;

      if (isDataLoaded) {
        this.setState({
          isDataLoading: false
        });
      }
    }

    componentDidUpdate() {
      const {isDataLoaded} = this.props;
      document.documentElement.scrollTop = 0;
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
    isDataLoaded: propTypes.bool
  };

  return WithDataLoading;
};
