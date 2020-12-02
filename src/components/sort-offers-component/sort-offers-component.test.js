import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

import {SortOffersComponent} from "./sort-offers-component";
const mockStore = configureStore()({
  DATA: {
    activeSortType: `POPULAR`
  }
});

const isOpened = false;
const activeSortType = `POPULAR`;


it(`Should Sort component render correctly`, () => {
  const noop = () => {};
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <SortOffersComponent
            activeSortType={activeSortType}
            sortCitiesAction={noop}
            isOpened={isOpened}
            onOpenerClick={noop}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
