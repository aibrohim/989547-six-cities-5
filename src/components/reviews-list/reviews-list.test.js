import React from "react";
import renderer from "react-test-renderer";

import ReviewsList from "./reviews-list";

const comments = [
  {
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
  }
];

it(`Should reviews list render`, () => {
  const tree = renderer
  .create(<ReviewsList comments={comments}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
