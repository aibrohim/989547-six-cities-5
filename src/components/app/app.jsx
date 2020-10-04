import React from "react";
import Main from "../main/main";
import propTypes from "prop-types";

const App = (props) => {
  const {rentingOffersCount} = props;

  return (
    <Main rentingOffersCount={rentingOffersCount}/>
  );
};

App.propTypes = {
  rentingOffersCount: propTypes.number.isRequired
};

export default App;

