import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import dashboard from "./dashboard";

export default combineReducers({
  routing: routerReducer,
  dashboard,
});
