import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";

import {OfferCard} from "./offer-card";

const offer = {
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
};

const noop = () => {};
const className = `cities__place-card`;
const block = `cities`;
const imgWidth = `123`;
const imgHeight = `56`;

const mockStore = configureMockStore()({
  PROCESS: {
    hoveredOffer: {}
  }
});

it(`Should Offer Card render`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <OfferCard
            offer={offer}
            className={className}
            block={block}
            onHoverOfferAction={noop}
            changeBookmarkStatus={noop}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
