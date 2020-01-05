import React from "react";
import AddQuestion from "./components/addQuestion";
import TopQuestions from "./components/topQuestions";
import Search from "./components/search";
import Answers from "./components/answers";
import NavLink from "./components/navLink";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store";
const store = createStore(rootReducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavLink />
          <Route path="/search" component={Search} />
          <Route path="/addquestion" exact component={AddQuestion} />
          <Route path="/topquestions" exact component={TopQuestions} />
          <Route path="/answers" exact component={Answers} />
        </BrowserRouter>
      </Provider>
    );
  }
}
