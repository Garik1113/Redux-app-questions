export const NAVLINK_SEARCH_QUESTION = "SEARCH_QUESTION";
export const NAVLINK_ADD_SEARCHING_QUESTIONS = "ADD_SEARCHING_QUESTIONS";
export const ANSWERS_ADD_ANSWER = "ANSWERS_ADD_ANSWER";
export const ANSWERS_COUNT_INCREMENT = "ANSWERS_COUNT_INCREMENT";

export const searchQuestionAction = searchValue => {
  return {
    type: NAVLINK_SEARCH_QUESTION,
    payload: searchValue
  };
};

export const navLinkAddQuestions = questions => {
  return {
    type: NAVLINK_ADD_SEARCHING_QUESTIONS,
    payload: questions
  };
};

export const addAnswer = answer => {
  return {
    type: ANSWERS_ADD_ANSWER,
    payload: answer
  };
};

export const answersCountIncrement = () => ({ type: ANSWERS_COUNT_INCREMENT });
