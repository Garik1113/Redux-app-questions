import {
  NAVLINK_SEARCH_QUESTION,
  NAVLINK_ADD_SEARCHING_QUESTIONS,
  ANSWERS_ADD_ANSWER,
  ANSWERS_COUNT_INCREMENT
} from "./actions";

const defaultState = [];

export const navLinkAddreducer = (state = defaultState, action) => {
  switch (action.type) {
    case NAVLINK_ADD_SEARCHING_QUESTIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};

const defaulte = [];

export const navLinkSearchReducer = (state = defaulte, action) => {
  switch (action.type) {
    case NAVLINK_SEARCH_QUESTION:
      return action.payload;
    case ANSWERS_ADD_ANSWER:
      return [
        ...state,
        state.map((e, i) =>
          !Array.isArray(e) ? e.answers.push(action.payload) : i++
        )
      ];
    case ANSWERS_COUNT_INCREMENT:
      return [...state, state.map(e => e.countOfAnswers++)].filter(
        l => !Array.isArray(l)
      );
    default:
      return state;
  }
};
