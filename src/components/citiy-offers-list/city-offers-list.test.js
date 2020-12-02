import React from "react";
import renderer from "react-test-renderer";

import {CityOffersList} from "./city-offers-list";

const activeCity = `Amsterdam`;
const offers = [
  {
    id: 123
  },
  {
    id: 124
  },
  {
    id: 125
  }
];

it(`Should City offers list render correctly`, () => {
  const tree = renderer
  .create(<CityOffersList
    activeCity={activeCity}
    offers={offers}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
