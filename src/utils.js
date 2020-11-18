export const filterOffers = (city, offers) => {
  return offers.clice().filter((offer) => offer.city === city);
};

export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomElementsArray = (array) => {
  const MIN_ARRAY_LENGTH = 2;
  const randomArrayLength = getRandomInteger(0, array.length - 1);

  const splicedArray = array.slice().splice(MIN_ARRAY_LENGTH, randomArrayLength);

  if (splicedArray.length === 0) {
    return array;
  }

  return splicedArray;
};

export const adaptToClient = (data) => {
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
