import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./redux";

const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);
const store = createStore(Reducer, undefined, enhancer);

export default store;
