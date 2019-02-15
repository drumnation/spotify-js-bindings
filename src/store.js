import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./redux";

const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);
const store = createStore(reducer, undefined, enhancer);

export default store;
