import { TOPQUESTIONS_ADD_QUESTION } from "./actions";

const defaultState = [];

export const topQuestionsAddreducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOPQUESTIONS_ADD_QUESTION:
      return action.payload;
    default:
      return state;
  }
};
