import {loadOffers} from "./action.js";
import {loadComments} from "./action.js";
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

export const getComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
  .then((comments) => dispatch(loadComments(comments)));
};
