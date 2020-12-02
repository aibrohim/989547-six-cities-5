import React from "react";
import renderer from "react-test-renderer";

import {SortOffersComponent} from "./sort-offers-component";
import {withActiveSortType} from "../../hocks/with-active-sort-type/with-active-sort-type";

const SortOffersComponentWrapped = withActiveSortType(SortOffersComponent);

it(`Should Sort component render correctly`, () => {
  const tree = renderer.create(<SortOffersComponentWrapped
    
  />).toJSON();
});
