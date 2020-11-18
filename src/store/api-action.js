import {loadOffers} from "./action.js";
import {adaptToClient} from "../utils.js";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => {
    return data.map((offer) => {
      return adaptToClient(offer);
    });
  })
  .then((data) => dispatch(loadOffers(data)))
);
