import {requireAuthorization, loadOffers, loadComments, loadOffer, loadNearbyOffers, redirectToRoute} from "./action.js";
import {adaptOfferToClient, adaptReviewToClient} from "../utils.js";
import {AuthorizationStatus} from "../consts";

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

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data}) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((err) => {
      throw err;
    });
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, data)))
    .then(() => dispatch(redirectToRoute(`/`)));
};

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
