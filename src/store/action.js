export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  OFFERS_LIST: `OFFERS_LIST`
};

export const ActionCreator = {
  changeCity: (city) => (
    {
      type: ActionType.CITY_CHANGE,
      payload: city
    }
  ),
  getOffers: (offers) => ({
    type: ActionType.OFFERS_LIST,
    payload: offers
  })
};