export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORT_OFFERS: `SORT_OFFERS`,
  HOVER_OFFER: `HOVER_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  NO_AUTHORIZATION: `NO_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
  LOAD_BOOKMARKS: `LOAD_BOOKMARKS`,
  UPDATE_BOOKMARKS: `UPDATE_BOOKMARKS`,
  POST_COMMENT: `POST_COMMENT`,
  CHANGE_COMMENT_POST_STATUS: `CHANGE_COMMENT_POST_STATUS`,
  ERROR_HAPPENED: `ERROR_HAPPENED`
};

export const changeCity = (city) => ({
  type: ActionType.CITY_CHANGE,
  payload: city
});

export const sortCities = (sortType) => ({
  type: ActionType.SORT_OFFERS,
  payload: sortType
});

export const hoverOffer = (hoveredOffer) => ({
  type: ActionType.HOVER_OFFER,
  payload: hoveredOffer
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer
});

export const loadNearbyOffers = (offers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: offers
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const updateOffers = (offer) => ({
  type: ActionType.UPDATE_OFFERS,
  payload: offer
});

export const updateBookmarks = (offer) => ({
  type: ActionType.UPDATE_BOOKMARKS,
  payload: offer
});

export const requireAuthorization = (status, data) => {
  return ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
    userInfo: data
  });
};

export const errorHappened = () => ({
  type: ActionType.ERROR_HAPPENED
});

export const loadBookmarks = (bookmarks) => ({
  type: ActionType.LOAD_BOOKMARKS,
  payload: bookmarks
});

export const pushComment = (comment) => ({
  type: ActionType.POST_COMMENT,
  payload: comment
});

export const changeCommentPostStatus = (status) => ({
  type: ActionType.CHANGE_COMMENT_POST_STATUS,
  payload: status
});
