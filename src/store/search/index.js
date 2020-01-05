import { combineReducers } from "redux";
import { navLinkAddreducer, navLinkSearchReducer } from "./reducers";

export const navLinkReducer = combineReducers({
  navLinkAddreducer,
  navLinkSearchReducer
});
