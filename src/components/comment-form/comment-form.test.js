import React, {createRef} from "react";
import renderer from "react-test-renderer";
import {CommentForm} from "./comment-form";
import {CommentPostStatus} from "../../consts";

describe(`Should commentForm render correctly`, () => {
  it(`Renders with Pending`, () => {
    const tree = renderer
      .create(<CommentForm
        sendStatus={CommentPostStatus.PENDING}
        onFieldsChange={() => {}}
        formRef={createRef()}
        buttonRef={createRef()}
        onFormSubmit={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renders with Error`, () => {
    const tree = renderer
      .create(<CommentForm
        sendStatus={CommentPostStatus.SENDING}
        onFieldsChange={() => {}}
        formRef={createRef()}
        buttonRef={createRef()}
        onFormSubmit={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renders with Error`, () => {
    const tree = renderer
      .create(<CommentForm
        sendStatus={CommentPostStatus.SUCCESSFULLY}
        onFieldsChange={() => {}}
        formRef={createRef()}
        buttonRef={createRef()}
        onFormSubmit={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renders with Error`, () => {
    const tree = renderer
      .create(<CommentForm
        sendStatus={CommentPostStatus.ERROR}
        onFieldsChange={() => {}}
        formRef={createRef()}
        buttonRef={createRef()}
        onFormSubmit={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

