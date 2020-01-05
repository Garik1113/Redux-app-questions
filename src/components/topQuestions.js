import React from "react";
import { connect } from "react-redux";
import { topQuestionsAddAction } from "../store/topQuestions/actions";
import { searchQuestionAction } from "../store/search/actions";

class TopQuestions extends React.Component {
  showQuestions = i => {
    let showQuestions = this.props.savedQuestions.slice();
    let beginIndex = i * 4;
    this.props.topQuestionsAddAction(
      showQuestions.slice(beginIndex, beginIndex + 4)
    );
  };

  goToAnswers = l => {
    this.props.history.push({ pathname: "/answers", state: l });
    this.props.searchQuestionAction([l]);
  };
  render() {
    const numOfPagination = Math.ceil(this.props.savedQuestions.length / 4);
    let emptyArr = [];
    emptyArr.length = numOfPagination;
    emptyArr.fill("5");
    return (
      <div className="container jumbotron">
        <h1>Top Questions</h1>
        <ul className="list-group" style={{ width: "300px" }}>
          {this.props.showingQuestions.map((l, m) => (
            <li
              key={m}
              className="list-group-item"
              onClick={this.goToAnswers.bind(this, l)}
            >
              {l.name}
              <hr />
              <b>answers {l.countOfAnswers}</b>
            </li>
          ))}
        </ul>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {emptyArr.map((e, i) => (
              <li className="page-item" key={i}>
                <b
                  className="page-link"
                  onClick={this.showQuestions.bind(this, i)}
                >
                  {i + 1}
                </b>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showingQuestions: state.topQuestionReducer.topQuestionsAddreducer,
    savedQuestions: state.addQuestionReducers.addQuestionSaveReducer
  };
};
const mapDispatchToProps = {
  topQuestionsAddAction,
  searchQuestionAction
};
export default connect(mapStateToProps, mapDispatchToProps)(TopQuestions);
