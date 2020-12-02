import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import CityMap from "./city-map";

const mockStore = configureStore()({
  PROCESS: {
    hoveredOffer: {
      id: 213,
      location: {
        latitude: 234,
        longitude: 999,
        zoom: 12
      }
    }
  }
});

const offers = [
  {
    id: 213,
    location: {
      latitude: 3123124,
      longitude: 425,
      zoom: 12
    }
  },
  {
    id: 123,
    location: {
      latitude: 3123125,
      longitude: 4250.6,
      zoom: 12
    }
  }
];

const MapTypes = {
  SMALL: `SMALL`,
  BIG: `BIG`
};

describe(`Should Map render correctly`, () => {
  it(`Should map of whole city render`, () => {
    const div = document.createElement(`div`);
    div.id = `map`;
    document.body.appendChild(div);
    const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <CityMap
              offers={offers}
              styles={{}}
              hoveredOffer={{}}
              type={MapTypes.SMALL}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
