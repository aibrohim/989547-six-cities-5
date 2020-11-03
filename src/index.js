import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import Offers from "./mocks/offers.js";
import cities from "./mocks/cities.js";
import {reducer} from "./store/reducer.js";


const Settings = {
  RENTING_OFFERS_COUNT: 99
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDom.render(
    <Provider store={store}>
      <App cities={cities} offers={Offers} rentingOffersCount={Settings.RENTING_OFFERS_COUNT}/>
    </Provider>,
    document.querySelector(`#root`)
);
