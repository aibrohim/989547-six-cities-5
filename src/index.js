import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api.js";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {checkAuth, fetchBookmarks} from "./store/api-action.js";
import {AuthorizationStatus} from "./consts";
import {redirect} from "./store/middleware/redirect";
import Loading from "./components/loading/loading";
import Error from "./components/error/error";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDom.render(
    <Loading />,
    document.querySelector(`#root`)
);

Promise.all([
  store.dispatch(checkAuth())
])
  .then(() => {
    ReactDom.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    );
  })
  .catch((err) => {
    ReactDom.render(
        <Provider store={store}>
          <Error />
        </Provider>,
        document.querySelector(`#root`)
    );
    throw err;
  });

