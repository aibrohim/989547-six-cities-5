import {
  changeCity,
  sortCities,
  hoverOffer,
  loadOffers,
  loadComments,
  loadOffer,
  loadNearbyOffers,
  ActionType
} from "./action.js";

describe(`Action creators work correctly`, () => {
  it(`Changing city works correctly`, () => {
    expect(changeCity()).toEqual({
      type: ActionType.CITY_CHANGE,
      payload: `Amsterdam`,
    });
  });

  it(`Sort city works correctly`, () => {
    expect(sortCities()).toEqual({
      type: ActionType.SORT_OFFERS,
      payload: `POPULAR`,
    });
  });

  it(`Hover offer works correctly`, () => {
    expect(hoverOffer()).toEqual({
      type: ActionType.HOVER_OFFER,
      payload: {
        id: 123,
      },
    });
  });

  it(`Loading offers works correctly`, () => {
    expect(loadOffers()).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [
        {
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
        }
      ],
    });
  });

  it(`Load comments works correctly`, () => {
    expect(loadComments()).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: [
        {
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
        }
      ]
    });
  });

  it(`Load offer works correctly`, () => {
    expect(loadOffer()).toEqual({
      type: ActionType.LOAD_OFFER,
      payload: {
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
      },
    });
  });

  it(`Load nearby offers works correctly`, () => {
    expect(loadNearbyOffers()).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [
        {
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
        }
      ],
    });
  });
});
