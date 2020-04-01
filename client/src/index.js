import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App className="container" />
  </Provider>,
  document.getElementById("root")
);
