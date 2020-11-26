import {ActionType} from "../../action.js";
import {sortTypes} from "../../../consts.js";

const getCities = (offers) => {
  const citiesNames = new Set();
  const citiesList = [];
  let initialCityIndex = 0;

  offers.forEach((offer) => {
    citiesNames.add(offer.city.name);
  });

  citiesNames.forEach((city) => {
    citiesList.push({
      name: city,
      index: initialCityIndex
    });
    initialCityIndex++;
  });

  return Array.from(citiesList);
};

const getOffersByCity = (offers) => {
  const cities = getCities(offers);

  const offersByCityMap = new Map(
      cities.map((city) => [city.name, []])
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

const sortCities = (offersList, type, allOffers, city) => {
  switch (type) {
    case sortTypes.POPULAR:
      return getOffersByCity(allOffers).get(city);
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

const updateOffers = (offers, updatedOffer) => {
  const updateOfferIndex = offers.findIndex((offer) => offer.id === updatedOffer.id);
  offers = [
    ...offers.slice(0, updateOfferIndex),
    updatedOffer,
    ...offers.slice(updateOfferIndex + 1)
  ];
  return offers;
};

const initialState = {
  cities: [],
  activeCity: ``,
  offers: [],
  activeSortType: sortTypes.POPULAR,
  allOffers: [],
  isOffersLoaded: false
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
            offers: getOffersByCity(action.payload).get(firstNotEmptyCity),
            isOffersLoaded: true
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
    case ActionType.UPDATE_OFFERS:
      return Object.assign(
          {},
          state,
          {
            offers: updateOffers(state.offers, action.payload)
          }
      );
  }

  return state;
};

export {appData};
