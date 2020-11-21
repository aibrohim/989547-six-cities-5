import {ActionType} from "../../action.js";

const initialState = {
  hoveredOffer: {},
  comments: [],
  activeOffer: {},
  nearbyHotels: [],
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
    case ActionType.LOAD_COMMENTS:
      return Object.assign(
          {},
          state,
          {
            comments: action.payload
          }
      );
    case ActionType.LOAD_OFFER:
      return Object.assign(
          {},
          state,
          {
            activeOffer: action.payload
          }
      );
    case ActionType.LOAD_NEARBY_OFFERS:
      return Object.assign(
          {},
          state,
          {
            nearbyHotels: action.payload
          }
      );
  }

  return state;
};

export {appProcess};

