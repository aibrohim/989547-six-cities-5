import {loadOffers, loadComments, loadOffer} from "./action.js";
import {adaptToClient} from "../utils.js";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => {
    return data.map((offer) => {
      return adaptToClient(offer);
    });
  })
  .then((data) => {
    return dispatch(loadOffers(data));
  })
);

export const getComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
  .then(({data}) => {
    return dispatch(loadComments(data));
  });
};

export const getOfferById = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}`)
  .then(({data}) => {
    return dispatch(loadOffer(data));
  });
};
