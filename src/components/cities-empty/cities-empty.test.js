import React from "react";
import renderer from "react-test-renderer";

import CitiesEmpty from "./cities-empty";

it(`Should render main block of main page with no cities`, () => {
  const tree = renderer
  .create(<CitiesEmpty />).toJSON();

  expect(tree).toMatchSnapshot();
});
