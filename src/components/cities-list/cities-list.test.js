import React from "react";
import renderer from "react-test-renderer";

import {CitiesList} from "./cities-list";

const cities = [
  {
    name: `Amsterdam`,
    index: 1
  },
  {
    name: `Cologne`,
    index: 2
  },
  {
    name: `Paris`,
    index: 3
  }
];

const activeCity = `Amsterdam`;

it(`Should cities list render`, () => {
  const tree = renderer
  .create(<CitiesList
    activeCity={activeCity}
    cities={cities}
    changeCityAction={() => {}}
    hoverOfferAction={() => {}}
    sortCitiesAction={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
