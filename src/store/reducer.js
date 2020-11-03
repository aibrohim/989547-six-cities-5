import {ActionType} from "./action.js";

const initialState = {
  city: ``,
  offers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return Object.assign(state, {
        city: action.payload
      });

    case ActionType.OFFERS_LIST:
      return Object.assign(state, {
        offers: action.payload
      });
  }

  return state;
};

export {reducer};

