import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

import {Favorites} from "./favorites";

const offers = [
  {
    id: 123,
    city: {
      name: `Amsterdam`
    },
    cost: 444,
    isFavorite: true,
    isPremium: false,
    previewImg: `https://picsum.photos/210`,
    rate: 4,
    title: `Bla bla bla`,
    type: `Room`
  },
  {
    id: 124,
    city: {
      name: `Amsterdam`
    },
    cost: 445,
    isFavorite: true,
    isPremium: false,
    previewImg: `https://picsum.photos/210`,
    rate: 4,
    title: `Hello, mello, shmello`,
    type: `House`
  },
];

const mockStore = configureStore()({
  USER: {
    isDataLoaded: false,
    userInfo: {
      email: `ibrohim@gmail.com`
    }
  },
  DATA: {
    bookmarks: offers
  }
});

const userInfo = {
  email: `ibrohim@gmail.com`
};

it(`Should favorites page render`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Favorites
            bookmarks={offers}
            userInfo={userInfo}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
