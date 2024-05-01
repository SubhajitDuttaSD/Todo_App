import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import TodoReducer from "./reducers/TodoReducers";

const store = createStore(TodoReducer);

export default store;
