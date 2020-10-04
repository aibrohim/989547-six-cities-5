import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENTING_OFFERS_COUNT: 99
};

ReactDom.render(
    <App rentingOffersCount={Settings.RENTING_OFFERS_COUNT}/>, document.querySelector(`#root`)
);
