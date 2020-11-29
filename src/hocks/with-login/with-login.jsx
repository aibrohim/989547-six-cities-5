import React, {createRef} from "react";
import propTypes from "prop-types";

export const withLogin = (Component) => {
  class WithLogin extends React.PureComponent {
    constructor(props) {
      super(props);

      this.loginRef = createRef();
      this.passwordRef = createRef();
      this.buttonRef = createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        isLogging: false
      };
    }

    handleSubmit(evt) {
      const {loginAction} = this.props;

      evt.preventDefault();

      this.setState({
        isLogging: true
      });

      this.loginRef.current.disabled = true;
      this.passwordRef.current.disabled = true;
      this.buttonRef.current.disabled = true;

      loginAction({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value
      });
    }

    componentDidUpdate() {
      const {errorOnSigning} = this.props;
      if (errorOnSigning) {
        this.buttonRef.current.disabled = false;
        this.buttonRef.current.textContent = `Sign in`;
      }
    }

    render() {
      return (
        <Component
          loginRef={this.loginRef}
          passwordRef={this.passwordRef}
          buttonRef={this.buttonRef}
          onSubmit={this.handleSubmit}
          isLogging={this.state.isLogging}
          {...this.props}
        />
      );
    }
  }

  WithLogin.propTypes = {
    loginAction: propTypes.func.isRequired,
    errorOnSigning: propTypes.bool
  };

  return WithLogin;
};
