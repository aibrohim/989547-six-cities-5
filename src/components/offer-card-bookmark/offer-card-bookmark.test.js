import React from "react";
import renderer from "react-test-renderer";

import BookmarkCard from "./offer-card-bookmark";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

it(`Should bookmark offer card render`, () => {
  const tree = renderer
  .create(<BookmarkCard />).toJSON();

  expect(tree).toMatchSnapshot();
});
