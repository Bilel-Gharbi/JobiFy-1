import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootreducer from "../reducers";

const initialState = {};
const middlewares = [thunk, logger];

const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
