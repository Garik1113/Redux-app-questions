export const TOPQUESTIONS_ADD_QUESTION = "TOPQUESTIONS_ADD_QUESTION";

export const topQuestionsAddAction = questions => {
  return {
    type: TOPQUESTIONS_ADD_QUESTION,
    payload: questions
  };
};
