import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import Reducer from "./redux";

const isDevelopment = () => {
  return process.env.NODE_ENV === "development";
};

const middleware = [thunk];

if (isDevelopment()) {
  const { logger } = require(`redux-logger`);
  middleware.push(logger);
}

const enhancer = applyMiddleware(...middleware);
const store = createStore(Reducer, undefined, enhancer);
export default store;
