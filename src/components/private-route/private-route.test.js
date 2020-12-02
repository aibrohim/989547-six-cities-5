import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

import {PrivateRoute} from "./private-route";

const mockStore = configureStore()({
  USER: {
    authorizationStatus: ``,
    isUserStatusLoaded: true,
  }
});

const noop = () => {};

const authorizationStatus = `NO_AUTH`;
const exact = true;
const path = ``;
const type = ``;
const isUserStatusLoaded = false;

it(`Should private route work`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <PrivateRoute
            authorizationStatus={authorizationStatus}
            exact={exact}
            path={path}
            type={type}
            isUserStatusLoaded={isUserStatusLoaded}
            render={noop}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
