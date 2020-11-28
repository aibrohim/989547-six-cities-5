import React from "react";
import {connect} from "react-redux";
import {changeCity} from "../../store/action.js";
import propTypes from "prop-types";
import {hoverOffer} from "../../store/action.js";
import {sortCities} from "../../store/action.js";
import {SortTypes} from "../../consts.js";

class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(evt) {
    const {activeCity, changeCityAction, hoverOfferAction, sortCitiesAction} = this.props;

    evt.preventDefault();
    const changedCity = evt.target.textContent;

    if (activeCity !== changedCity) {
      changeCityAction(changedCity);
      hoverOfferAction();
      sortCitiesAction();
    }
  }

  render() {
    const {activeCity, cities} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const activeClass = (city.name === activeCity) && `tabs__item--active`;
            return (
              <li key={city.index} className="locations__item" onClick={this.handleCityClick}>
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
  activeCity: propTypes.string,
  changeCityAction: propTypes.func.isRequired,
  cities: propTypes.array.isRequired,
  hoverOfferAction: propTypes.func,
  sortCitiesAction: propTypes.func
};

const mapStateToProps = ({DATA}) => {
  return ({
    cities: DATA.cities,
    activeCity: DATA.activeCity,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(city) {
    dispatch(changeCity(city));
  },
  hoverOfferAction() {
    dispatch(hoverOffer({}));
  },
  sortCitiesAction() {
    dispatch(sortCities(SortTypes.POPULAR));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
