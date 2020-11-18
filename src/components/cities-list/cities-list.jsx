import React from "react";
import {connect} from "react-redux";
import {changeCity} from "../../store/action.js";
import propTypes from "prop-types";
import {hoverOffer} from "../../store/action.js";
import {sortCities} from "../../store/action.js";
import {sortTypes} from "../../consts.js";

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
      hoverOfferAction({});
      sortCitiesAction();
    }
  }

  render() {
    const {activeCity, cities} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) => {
            const activeClass = (city === activeCity) && `tabs__item--active`;
            return (
              <li key={index} className="locations__item" onClick={this.handleCityClick}>
                <a className={`locations__item-link tabs__item ${activeClass}`}>
                  <span>{city}</span>
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
  hoverOfferAction: propTypes.func
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
  hoverOfferAction(offer) {
    dispatch(hoverOffer(offer));
  },
  sortCitiesAction() {
    dispatch(sortCities(sortTypes.POPULAR));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
