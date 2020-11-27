import React, {createRef} from "react";
import {connect} from "react-redux";
import {login} from "../../store/api-action";
import {Link} from "react-router-dom";
import propTypes from "prop-types";

class Login extends React.PureComponent {
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

  render() {
    const submitButtonText = () => {
      return this.state.isLogging
        ? `Signing in`
        : `Sign in`;
    };

    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={this.handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={this.loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={this.passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
                </div>
                <button ref={this.buttonRef} className="login__submit form__submit button" type="submit">{submitButtonText()}</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  loginAction: propTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loginAction(data) {
    dispatch(login(data));
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);

