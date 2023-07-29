import { combineReducers } from "redux";
import StateRoutes from "./stateRoutes";

const allReducers = combineReducers({
  routers: StateRoutes
});

export default allReducers;