import { combineReducers } from "redux";
import {
  addQuestionNameReducer,
  addQuestionCategoryReducer,
  addQuestionTitleReducer,
  addQuestionSaveReducer
} from "./reducers";

export const addQuestionReducers = combineReducers({
  addQuestionNameReducer,
  addQuestionCategoryReducer,
  addQuestionTitleReducer,
  addQuestionSaveReducer
});
