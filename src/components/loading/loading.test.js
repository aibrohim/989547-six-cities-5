import React from "react";
import renderer from "react-test-renderer";

import Loading from "./loading";

it(`Should loading render correctly`, () => {
  const tree = renderer
  .create(<Loading />).toJSON();

  expect(tree).toMatchSnapshot();
});
