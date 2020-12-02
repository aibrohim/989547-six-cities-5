import React from "react";
import renderer from "react-test-renderer";

import Review from "./review";

const comment = {
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
};

it(`Should review render`, () => {
  const tree = renderer
  .create(<Review review={comment}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
