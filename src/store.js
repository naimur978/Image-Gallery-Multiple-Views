import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/combined_reducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export { store };
