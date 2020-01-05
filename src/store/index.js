import { combineReducers } from "redux";
import { addQuestionReducers } from "./addQuestion";
import { topQuestionReducer } from "./topQuestions";
import { navLinkReducer } from "./search";

export const rootReducer = combineReducers({
  addQuestionReducers,
  topQuestionReducer,
  navLinkReducer
});
