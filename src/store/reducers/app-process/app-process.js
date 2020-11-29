import {ActionType} from "../../action.js";
import {sortReviews} from "../../../utils";
import {CommentPostStatus} from "../../../consts";

const initialState = {
  hoveredOffer: {},
  comments: [],
  activeOffer: {},
  nearbyHotels: [],
  isOfferLoaded: false,
  isCommentsLoaded: false,
  isNearbyOffersLoaded: false,
  commentPostStatus: CommentPostStatus.PENDING
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
            comments: sortReviews(action.payload),
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
    case ActionType.POST_COMMENT:
      return Object.assign(
          {},
          state,
          {
            comments: sortReviews(action.payload)
          }
      );
    case ActionType.CHANGE_COMMENT_POST_STATUS:
      return Object.assign(
          {},
          state,
          {
            commentPostStatus: action.payload
          }
      );
  }

  return state;
};

export {appProcess};

