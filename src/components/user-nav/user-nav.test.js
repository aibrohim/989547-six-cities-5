import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import {UserNav} from "./user-nav";

const mockStore = configureStore()({
  USER: {
    authorizationStatus: `AUTH`,
    userInfo: {
      email: ``
    }
  }
});

const authorizationStatus = `AUTH`;
const userInfo = {
  email: ``
};

it(`Should user nav render`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <UserNav
            authorizationStatus={authorizationStatus}
            userInfo={userInfo}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
