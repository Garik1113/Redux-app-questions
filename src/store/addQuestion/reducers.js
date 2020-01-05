import {
  ADDQUESTION_PAGE_CHANGE_NAME,
  ADDQUESTION_PAGE_SELECT_CATEGORY,
  ADDQUESTION_PAGE_CHANGE_TITLE,
  ADDQUESTION_PAGE_SAVE
} from "./actions";

const defaultStateName = "";
const defaultStateCategory = "";
const defaultStateSave = [];
const defaultStateTitle = "";

export const addQuestionNameReducer = (state = defaultStateName, action) => {
  switch (action.type) {
    case ADDQUESTION_PAGE_CHANGE_NAME:
      return action.payload;
    default:
      return state;
  }
};

export const addQuestionCategoryReducer = (
  state = defaultStateCategory,
  action
) => {
  switch (action.type) {
    case ADDQUESTION_PAGE_SELECT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export const addQuestionTitleReducer = (state = defaultStateTitle, action) => {
  switch (action.type) {
    case ADDQUESTION_PAGE_CHANGE_TITLE:
      return action.payload;
    default:
      return state;
  }
};

export const addQuestionSaveReducer = (state = defaultStateSave, action) => {
  switch (action.type) {
    case ADDQUESTION_PAGE_SAVE:
      return [...state, action.payload];
    default:
      return state;
  }
};
