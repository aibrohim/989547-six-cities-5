import React from "react";
import renderer from "react-test-renderer";

import NearCard from "./offer-card-near";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

it(`Should near card render`, () => {
  const tree = renderer
  .create(<NearCard />).toJSON();

  expect(tree).toMatchSnapshot();
});
