export const ADDQUESTION_PAGE_CHANGE_NAME = "ADDQUESTION_PAGE_CHANGE_NAME";
export const ADDQUESTION_PAGE_SELECT_CATEGORY =
  "ADDQUESTION_PAGE_SELECT_CATEGORY";
export const ADDQUESTION_PAGE_CHANGE_TITLE = "ADDQUESTION_PAGE_CHANGE_TITLE";
export const ADDQUESTION_PAGE_SAVE = "ADDQUESTION_PAGE_SAVE";

export const addQuestionNameAction = name => {
  return {
    type: ADDQUESTION_PAGE_CHANGE_NAME,
    payload: name
  };
};

export const addQuestionSelectAction = category => {
  return {
    type: ADDQUESTION_PAGE_SELECT_CATEGORY,
    payload: category
  };
};

export const addQuestionChangeTitle = title => {
  return {
    type: ADDQUESTION_PAGE_CHANGE_TITLE,
    payload: title
  };
};

export const addQuestionSave = obj => {
  return {
    type: ADDQUESTION_PAGE_SAVE,
    payload: obj
  };
};
