import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";

import App from "./routes/App";
import reducer from "./redux/reducers";

import "./assets/style/main.scss";

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

const preloadedState = window.__PRELOADED_STATE__;
const history = createBrowserHistory();
const store = createStore(
  reducer,
  preloadedState,
  compose(applyMiddleware(thunk))
);

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
);
