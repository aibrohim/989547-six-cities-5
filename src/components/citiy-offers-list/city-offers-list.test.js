import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import {CityOffersList} from "./city-offers-list";

const mockStore = configureStore()({
  DATA: {
    activeCity: `Amsterdam`
  }
});

const activeCity = `Amsterdam`;
const offers = [
  {
    id: 123,
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
    cost: 445,
    isFavorite: true,
    isPremium: false,
    previewImg: `https://picsum.photos/210`,
    rate: 4,
    title: `Hello, mello, shmello`,
    type: `House`
  },
];

it(`Should City offers list render correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <CityOffersList
            activeCity={activeCity}
            offers={offers}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
