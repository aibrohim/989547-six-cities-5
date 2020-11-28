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

export const adaptOfferToClient = (data) => {
  const adaptedData = Object.assign(
      {},
      data,
      {
        isPremium: data.is_premium,
        previewImg: data.preview_image,
        cost: data.price,
        isFavorite: data.is_favorite,
        rate: Math.round(data.rating),
        adults: data.max_adults,
        host: Object.assign(
            {},
            data.host,
            {
              avatarUrl: data.host.avatar_url,
              isPro: data.host.is_pro
            }
        )
      }
  );
  delete adaptedData.is_premium;
  delete adaptedData.preview_image;
  delete adaptedData.price;
  delete adaptedData.is_favorite;
  delete adaptedData.rating;
  delete adaptedData.host.avatar_url;
  delete adaptedData.host.is_pro;

  return adaptedData;
};

export const adaptReviewToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        user: Object.assign(
            {},
            comment.user,
            {
              avatarUrl: comment.user.avatar_url,
              isPro: comment.user.is_pro
            }
        )
      }
  );

  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;

  return adaptedComment;
};

export const sortReviews = (reviews) => {
  return reviews.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};
