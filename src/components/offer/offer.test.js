import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";

import {Offer} from "./offer";

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

const mockStore = configureMockStore()({
  PROCESS: {
    offer,
    comments: [],
    nearbyHotels: [],
  },
  USER: {
    authorizationStatus: ``,
    isDataLoaded: true
  }
});

const authorizationStatus = `AUTH`;
const comments = [
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
];
const nearbyHotels = [
  offer
];

jest.mock(`../city-map/city-map`, () => `CityMap`);
jest.mock(`../user-nav/user-nav`, () => `UserNav`);
jest.mock(`../comment-form/comment-form`, () => `CommentForm`);

it(`Should offer page render`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Offer
            offer={offer}
            authorizationStatus={authorizationStatus}
            comments={comments}
            nearbyHotels={nearbyHotels}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
