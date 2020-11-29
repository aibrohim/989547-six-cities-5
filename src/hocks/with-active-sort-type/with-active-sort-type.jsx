import React from "react";

export const withActiveSortType = (Component) => {
  class WithActiveSortType extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpened: false
      };

      this.handleOpenerClick = this.handleOpenerClick.bind(this);
    }

    handleOpenerClick() {
      this.setState({
        isOpened: !this.state.isOpened
      });
    }

    render() {
      return <Component {...this.props} isOpened={this.state.isOpened} onOpenerClick={this.handleOpenerClick}/>;
    }
  }

  return WithActiveSortType;
};
