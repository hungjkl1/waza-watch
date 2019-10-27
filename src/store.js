import { createStore, compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import root from "./reducer";
const initialState = {};
const middleware = [thunk]
const store = createStore(
  root,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
