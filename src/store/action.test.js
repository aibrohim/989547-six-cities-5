import {
  changeCity,
  sortCities,
  hoverOffer,
  loadOffers,
  loadComments,
  loadOffer,
  loadNearbyOffers,
  redirectToRoute,
  updateOffers,
  updateBookmarks,
  requireAuthorization,
  errorHappened,
  loadBookmarks,
  pushComment,
  changeCommentPostStatus,
  ActionType
} from "./action.js";

const city = `Amsterdam`;
const sortType = `POPULAR`;
const offer = {
  adults: 0,
  bedrooms: 0,
  city: {
    name: ``,
  },
  cost: 0,
  description: `Hello, mello, shmello`,
  goods: [],
  host: {
    id: 0,
    name: ``,
    avatarUrl: ``,
    isPro: true
  },
  id: 0,
  images: [],
  isFavorite: true,
  isPremium: true,
  previewImg: ``,
  rate: 0,
  title: ``,
  type: ``
};
const hoveredOffer = offer;
const offers = [offer];
const comment = {
  comment: ``,
  date: `2020-12-02T17:54:54.499Z`,
  id: 0,
  rating: 5,
  user: {
    id: 1,
    name: ``,
    avatarUrl: ``,
    isPro: true,
  }
};
const comments = [comment];
const url = `/comment`;
const commentStatus = `Pending`;
const userInfo = {
  email: ``
};
const userStatus = `AUTH`;

describe(`Action creators work correctly`, () => {
  it(`Changing city works correctly`, () => {
    expect(changeCity(city)).toEqual({
      type: ActionType.CITY_CHANGE,
      payload: city,
    });
  });

  it(`Sort city works correctly`, () => {
    expect(sortCities(sortType)).toEqual({
      type: ActionType.SORT_OFFERS,
      payload: sortType,
    });
  });

  it(`Hover offer works correctly`, () => {
    expect(hoverOffer(hoveredOffer)).toEqual({
      type: ActionType.HOVER_OFFER,
      payload: hoveredOffer,
    });
  });

  it(`Loading offers works correctly`, () => {
    expect(loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  it(`Load comments works correctly`, () => {
    expect(loadComments(comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    });
  });

  it(`Load offer works correctly`, () => {
    expect(loadOffer(offer)).toEqual({
      type: ActionType.LOAD_OFFER,
      payload: offer
    });
  });

  it(`Load nearby offers works correctly`, () => {
    expect(loadNearbyOffers(offers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offers,
    });
  });

  it(`redirection works correctly`, () => {
    expect(redirectToRoute(url)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    });
  });

  it(`Update offer works correctly`, () => {
    expect(updateOffers(offer)).toEqual({
      type: ActionType.UPDATE_OFFERS,
      payload: offer,
    });
  });

  it(`Update bookmark works correctly`, () => {
    expect(updateBookmarks(offer)).toEqual({
      type: ActionType.UPDATE_BOOKMARKS,
      payload: offer,
    });
  });

  it(`Error happened works correctly`, () => {
    expect(errorHappened()).toEqual({
      type: ActionType.ERROR_HAPPENED
    });
  });

  it(`Load bookmarks works correctly`, () => {
    expect(loadBookmarks(offers)).toEqual({
      type: ActionType.LOAD_BOOKMARKS,
      payload: offers
    });
  });

  it(`Posting comments works correctly`, () => {
    expect(pushComment(comment)).toEqual({
      type: ActionType.POST_COMMENT,
      payload: comment
    });
  });

  it(`Change comment post status comments works correctly`, () => {
    expect(changeCommentPostStatus(commentStatus)).toEqual({
      type: ActionType.CHANGE_COMMENT_POST_STATUS,
      payload: commentStatus
    });
  });

  it(`Require authorization status works correctly`, () => {
    expect(requireAuthorization(userStatus, userInfo)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: userStatus,
      userInfo
    });
  });
});
