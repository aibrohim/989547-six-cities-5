import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action.js";
import {sortTypes} from "../../consts.js";
import propTypes from "prop-types";

const Sort = (props) => {
  const {activeSortType, sortCities} = props;
  const handleClick = (evt) => {
    sortCities(evt.target.dataset.sortType);
  };

  const activeClass = (elementSortType) => {
    return `${activeSortType === elementSortType ? `places__option--active` : ``}`;
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick={handleClick} className="places__options places__options--custom places__options--opened">
        <li className={`places__option ${activeClass(sortTypes.POPULAR)}`} data-sort-type={sortTypes.POPULAR} tabIndex="0">Popular</li>
        <li className={`places__option ${activeClass(sortTypes.PRICE_LOW_TO_HIGH)}`} data-sort-type={sortTypes.PRICE_LOW_TO_HIGH} tabIndex="0">Price: low to high</li>
        <li className={`places__option ${activeClass(sortTypes.PRICE_HIGH_TO_LOW)}`} data-sort-type={sortTypes.PRICE_HIGH_TO_LOW} tabIndex="0">Price: high to low</li>
        <li className={`places__option ${activeClass(sortTypes.TOP)}`} data-sort-type={sortTypes.TOP} tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType
});

const mapDispatchToProps = (dispatch) => ({
  sortCities(sortType) {
    dispatch(ActionCreator.sortCities(sortType));
  }
});

Sort.propTypes = {
  activeSortType: propTypes.string.isRequired,
  sortCities: propTypes.func.isRequired
};

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
