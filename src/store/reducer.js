import {ActionType} from "./action.js";

const initialState = {
  activeCity: ``,
  offers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return Object.assign(state, {
        activeCity: action.payload
      });
  }

  return state;
};

export {reducer};

