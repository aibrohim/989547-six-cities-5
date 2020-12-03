import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import propTypes from "prop-types";

import {withLogin} from "./with-login";

const noop = () => {};

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

const MockComponentWrapped = withLogin(MockComponent);

it(`should with login render`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer
  .render(
      <MockComponentWrapped loginAction={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  );

  expect(tree).toMatchSnapshot();
});
