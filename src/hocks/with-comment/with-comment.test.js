import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import propTypes from "prop-types";

import {withComment} from "./with-comment";

const noop = () => {};
const id = 0;

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

const MockComponentWrapped = withComment(MockComponent);

describe(`Should with comment work`, () => {
  it(`with no change comment sending status should render`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
    .render(
        <MockComponentWrapped postCommentAction={noop} id={id}>
          <React.Fragment />
        </MockComponentWrapped>
    );

    expect(tree).toMatchSnapshot();
  });

  it(`with change comment sending status should render`, () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
    .render(
        <MockComponentWrapped postCommentAction={noop} id={id} changeSendStatus={noop}>
          <React.Fragment />
        </MockComponentWrapped>
    );

    expect(tree).toMatchSnapshot();
  });
});
