import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import Offers from "./mocks/offers.js";

const Settings = {
  RENTING_OFFERS_COUNT: 99
};

ReactDom.render(
    <App offers={Offers} rentingOffersCount={Settings.RENTING_OFFERS_COUNT}/>, document.querySelector(`#root`)
);
