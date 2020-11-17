import {ActionType} from "../../action.js";
import {sortTypes} from "../../../consts.js";

const getCities = (offers) => {
  const citiesList = new Set();

  offers.forEach((offer) => {
    citiesList.add(offer.city.name);
  });

  return Array.from(citiesList);
};

const getOffersByCity = (offers) => {
  const cities = getCities(offers);

  const offersByCityMap = new Map(
      cities.map((name) => [name, []])
  );

  offers.forEach((offer) => {
    offersByCityMap.get(offer.city.name).push(offer);
  });

  return offersByCityMap;
};

const getFirstNotEmptyCity = (offersByCity) => {
  const keys = Array.from(offersByCity.keys());
  const firstNotEmptyCity = keys.find((key) => offersByCity.get(key).length > 0);

  return firstNotEmptyCity;
};

// const offersByCity = getOffersByCity();
// const firstNotEmptyCity = getFirstNotEmptyCity(offersByCity);

const sortCities = (offersList, type, allOffers, city) => {
  switch (type) {
    case sortTypes.POPULAR:
      return getOffersByCity(allOffers).get(city);
    case sortTypes.PRICE_LOW_TO_HIGH:
      return offersList.slice().sort((a, b) => a.price - b.price);
    case sortTypes.PRICE_HIGH_TO_LOW:
      return offersList.slice().sort((a, b) => b.price - a.price);
    case sortTypes.TOP:
      return offersList.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offersList;
  }
};

const initialState = {
  cities: [],
  activeCity: ``,
  offers: [],
  activeSortType: sortTypes.POPULAR,
  allOffers: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      const firstNotEmptyCity = getFirstNotEmptyCity(getOffersByCity(action.payload));
      return Object.assign(
          {},
          state,
          {
            cities: getCities(action.payload),
            activeCity: firstNotEmptyCity,
            allOffers: action.payload,
            offers: getOffersByCity(action.payload).get(firstNotEmptyCity)
          }
      );
    case ActionType.CITY_CHANGE:
      return Object.assign(
          {},
          state,
          {
            activeCity: action.payload,
            offers: getOffersByCity(state.allOffers).get(action.payload)
          }
      );
    case ActionType.SORT_OFFERS:
      return Object.assign(
          {},
          state,
          {
            activeSortType: action.payload,
            offers: sortCities(state.offers, action.payload, state.allOffers, state.activeCity)
          }
      );
  }

  return state;
};

export {appData};
