import React from "react";
import ReactDOM from "react-dom";
import Routes from "./common/Routes";
import reducer from "./common/reducer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import promiseMiddleware from "redux-promise-middleware";
import "reset-css";
import "./index.css";

const store = createStore(reducer, applyMiddleware(promiseMiddleware()));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
