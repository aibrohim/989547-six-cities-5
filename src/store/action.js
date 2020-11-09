export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORT_OFFERS: `SORT_OFFERS`,
  HOVER_CITY: `HOVER_CITY`
};

export const ActionCreator = {
  changeCity: (city) => (
    {
      type: ActionType.CITY_CHANGE,
      payload: city
    }
  ),
  sortCities: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType
  }),
  hoverOffer: (hoveredOffer) => ({
    type: ActionType.HOVER_CITY,
    payload: hoveredOffer
  })
};
