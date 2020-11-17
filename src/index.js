import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api.js";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {fetchOffersList} from "./store/api-action.js";

const api = createAPI(
    () => store.dispatch()
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOffersList());

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
