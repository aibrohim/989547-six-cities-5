import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import cities from "../../mocks/cities.js";
import propTypes from "prop-types";

class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(evt) {
    const {activeCity, changeCity} = this.props;

    evt.preventDefault();
    const changedCity = evt.target.textContent;

    if (activeCity !== changedCity) {
      changeCity(changedCity);
    }
  }

  render() {
    const {activeCity} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const activeClass = (city.name === activeCity) && `tabs__item--active`;
            return (
              <li key={city.id} className="locations__item" onClick={this.handleCityClick}>
                <a className={`locations__item-link tabs__item ${activeClass}`}>
                  <span>{city.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

CitiesList.propTypes = {
  activeCity: propTypes.string.isRequired,
  changeCity: propTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return ({
    activeCity: state.activeCity
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
