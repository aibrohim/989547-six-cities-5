import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";

class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.citiesList = React.createRef();
  }

  render() {
    const {cities, activeCity, cityChange} = this.props;

    const handleCityClick = (evt) => {
      evt.preventDefault();
      const selectedCity = this.citiesList.current.querySelector(`.tabs__item--active`);
      if (selectedCity) {
        selectedCity.classList.remove(`tabs__item--active`);
      }
      if (evt.target.tagName === `SPAN`) {
        evt.target.parentElement.classList.add(`tabs__item--active`);
      } else {
        evt.target.classList.add(`tabs__item--active`);
      }

      cityChange(evt.target.textContent);
    };

    return (
      <section className="locations container">
        <ul ref={this.citiesList} className="locations__list tabs__list">
          {cities.map((city, index) => {
            if (index === 0) {
              return (
                <li key={city.id} className="locations__item">
                  <a className="locations__item-link tabs__item tabs__item--active" href="#" onClick={handleCityClick}>
                    <span>{city.name}</span>
                  </a>
                </li>
              );
            }
            return (
              <li key={city.id} className="locations__item">
                <a className="locations__item-link tabs__item" href="#" onClick={handleCityClick}>
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

const mapStateToProps = (state) => ({
  activeCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  cityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);