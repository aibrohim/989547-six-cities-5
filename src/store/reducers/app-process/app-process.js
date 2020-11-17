import {ActionType} from "../../action.js";

const initialState = {
  hoveredOffer: {}
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.HOVER_OFFER:
      return Object.assign(
          {},
          state,
          {
            hoveredOffer: action.payload
          }
      );
  }

  return state;
};

export {appProcess};

