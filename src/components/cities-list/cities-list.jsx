import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import cities from "../../mocks/cities.js";

class CitiesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.citiesList = React.createRef();

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(evt) {
    const {activeCity, cityChange} = this.props;
    console.log(activeCity);
    cityChange(evt.target.textContent);

    evt.preventDefault();
  }

  render() {
    return (
      <section className="locations container">
        <ul ref={this.citiesList} className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.id} className="locations__item" onClick={this.handleCityClick}>
              <a className="locations__item-link tabs__item">
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  cityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);