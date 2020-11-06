import {ActionType} from "./action.js";
import {sortTypes} from "../consts.js";
import cities from "../mocks/cities.js";
import offers from "../mocks/offers.js";

const getOffersByCity = () => {
  const getCitiesNames = cities.map((city) => city.name);
  const offersByCityMap = new Map(
      getCitiesNames.map((name) => [name, []])
  );

  offers.forEach((offer) => {
    offersByCityMap.get(offer.city).push(offer);
  });

  return offersByCityMap;
};

const getFirstNotEmptyCity = (offersByCity) => {
  const keys = Array.from(offersByCity.keys());
  const firstNotEmptyCity = keys.find((key) => offersByCity.get(key).length > 0);

  return firstNotEmptyCity;
};

const offersByCity = getOffersByCity();
const firstNotEmptyCity = getFirstNotEmptyCity(offersByCity);

const sortCities = (offersList, type, city) => {
  switch (type) {
    case sortTypes.POPULAR:
      return offersByCity.get(city);
    case sortTypes.PRICE_LOW_TO_HIGH:
      return offersList.slice().sort((a, b) => a.cost - b.cost);
    case sortTypes.PRICE_HIGH_TO_LOW:
      return offersList.slice().sort((a, b) => b.cost - a.cost);
    case sortTypes.TOP:
      return offersList.slice().sort((a, b) => b.rate - a.rate);
    default:
      return offersList;
  }
};

const initialState = {
  activeCity: firstNotEmptyCity,
  offers: offersByCity.get(firstNotEmptyCity),
  activeSortType: sortTypes.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return Object.assign(
          {},
          state,
          {
            activeCity: action.payload,
            offers: offersByCity.get(action.payload)
          }
      );
    case ActionType.SORT_OFFERS:
      return Object.assign(
          {},
          state,
          {
            activeSortType: action.payload,
            offers: sortCities(state.offers, action.payload, state.activeCity)
          }
      );
  }

  return state;
};

export {reducer};

