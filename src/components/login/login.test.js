import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";

import {Login} from "./login";

const mockStore = configureMockStore()({
  USER: {
    errorOnSigning: true
  }
});

const errorOnSigning = true;
const loginRef = React.createRef();
const passwordRef = React.createRef();
const buttonRef = React.createRef();
const noop = () => {};
const isLogging = false;

it(`Should login render`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Login
            errorOnSigning={errorOnSigning}
            loginRef={loginRef}
            passwordRef={passwordRef}
            buttonRef={buttonRef}
            isLogging={isLogging}
            onSubmit={noop}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
