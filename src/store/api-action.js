import {loadOffers} from "./action.js";

const adaptToClient = (data) => {
  const adaptedData = Object.assign(
      {},
      data,
      {
        isPremium: data.is_premium,
        previewImg: data.preview_image,
        cost: data.price,
        isFavorite: data.is_favorite,
        rate: data.rating
      }
  );

  delete adaptedData.is_premium;
  delete adaptedData.preview_image;
  delete adaptedData.price;
  delete adaptedData.is_favorite;
  delete adaptedData.rating;

  return adaptedData;
};

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => {
    return data.map((offer) => {
      return adaptToClient(offer);
    });
  })
  .then((data) => dispatch(loadOffers(data)))
);
