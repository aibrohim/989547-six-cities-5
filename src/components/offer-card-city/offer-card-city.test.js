import React from "react";
import renderer from "react-test-renderer";

import MainCard from "./offer-card-city";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

it(`Should main card render`, () => {
  const tree = renderer
  .create(<MainCard />).toJSON();

  expect(tree).toMatchSnapshot();
});
