import {ActionType} from "./action.js";
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

const initialState = {
  activeCity: firstNotEmptyCity,
  offers: offersByCity.get(firstNotEmptyCity)
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
  }

  return state;
};

export {reducer};

