export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORT_OFFERS: `SORT_OFFERS`,
  HOVER_OFFER: `HOVER_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`
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
