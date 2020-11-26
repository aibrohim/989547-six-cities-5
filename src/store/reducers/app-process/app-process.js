import {ActionType} from "../../action.js";

const initialState = {
  hoveredOffer: {},
  comments: [],
  activeOffer: {},
  nearbyHotels: [],
  isOfferLoaded: false,
  isCommentsLoaded: false,
  isNearbyOffersLoaded: false,
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
            comments: action.payload,
            isCommentsLoaded: true
          }
      );
    case ActionType.LOAD_OFFER:
      return Object.assign(
          {},
          state,
          {
            activeOffer: action.payload,
            isOfferLoaded: true
          }
      );
    case ActionType.LOAD_NEARBY_OFFERS:
      return Object.assign(
          {},
          state,
          {
            nearbyHotels: action.payload,
            isNearbyOffersLoaded: true,
          }
      );
    case ActionType.START_LOADING:
      return Object.assign(
          {},
          state,
          {
            isOfferLoaded: false,
            isCommentsLoaded: false,
            isNearbyOffersLoaded: false,
          }
      );
  }

  return state;
};

export {appProcess};

