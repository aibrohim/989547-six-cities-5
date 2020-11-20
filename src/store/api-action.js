import {loadOffers, loadComments, loadOffer, loadNearbyOffers} from "./action.js";
import {adaptOfferToClient, adaptReviewToClient} from "../utils.js";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => {
    return data.map((offer) => {
      return adaptOfferToClient(offer);
    });
  })
  .then((data) => {
    return dispatch(loadOffers(data));
  })
);

export const getComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
  .then(({data}) => {
    return data.map((comment) => adaptReviewToClient(comment));
  })
  .then((data) => dispatch(loadComments(data)));
};

export const getOfferById = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}`)
  .then(({data}) => {
    return dispatch(loadOffer(adaptOfferToClient(data)));
  });
};

export const getNearbyOffers = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
  .then(({data}) => {
    return data.map((offer) => adaptOfferToClient(offer));
  })
  .then((data) => {
    dispatch(loadNearbyOffers(data));
  });
};
