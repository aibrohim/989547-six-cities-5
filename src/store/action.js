export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORT_OFFERS: `SORT_OFFERS`
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
  })
};
