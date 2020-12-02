import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";

import {Main} from "./main";

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

const mockStore = configureMockStore()({
  DATA: {
    offers,
    isDataLoaded: false,
    cities: [],
    activeCity: `Cologne`
  },
  USER: {
    authorizationStatus: `AUTH`,
    userInfo: {
      email: `ibrohim@gmail.com`
    }
  },
});

jest.mock(`../city-map/city-map`, () => `CityMap`);

const isDataLoaded = true;

it(`Should main page render`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Main
            isDataLoaded={isDataLoaded}
            offers={offers}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
