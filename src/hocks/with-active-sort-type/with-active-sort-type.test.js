import React from "react";
import renderer from "react-test-renderer";
import propTypes from "prop-types";

import {withActiveSortType} from "./with-active-sort-type";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withActiveSortType(MockComponent);

it(`with active sort type should render`, () => {
  const tree = renderer
  .create(
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
