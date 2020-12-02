import React from "react";
import renderer from "react-test-renderer";

import Error from "./error";

it(`Should error render`, () => {
  const tree = renderer
  .create(<Error />).toJSON();

  expect(tree).toMatchSnapshot();
});
