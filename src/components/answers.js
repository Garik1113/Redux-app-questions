import React from "react";
import { connect } from "react-redux";
import { addAnswer, answersCountIncrement } from "../store/search/actions";
class Answers extends React.Component {
  answer = () => {
    this.props.addAnswer(this.answerValue.value);
    this.props.answersCountIncrement();
    this.answerValue.value = "";
    alert("Answer added");
  };

  tolike = e => {
    let value = e.target.innerHTML;
    value === "Like"
      ? (e.target.innerHTML = "Liked")
      : (e.target.innerHTML = "Like");
  };
  render() {
    let question = this.props.location.state;
    if (question === undefined) {
      return <div></div>;
    }

    return (
      <div className="jumbotron container">
        <h1>Answers</h1>
        <h2>{question.name}</h2>
        <div className="form-group">
          <ul className="list-group">
            {question.answers.map((k, n) => (
              <li key={n} className="list-group-item">
                {k}
                <button className="btn btn-primary" onClick={this.tolike}>
                  Like
                </button>
              </li>
            ))}
          </ul>
          <label>Enter answer</label>
          <textarea
            className="form-control"
            ref={answer => (this.answerValue = answer)}
          ></textarea>
          <button className="btn btn-primary" onClick={this.answer}>
            Enter
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedQuestions: state.addQuestionReducers.addQuestionSaveReducer,
    searchingQuestions: state.navLinkReducer.navLinkSearchReducer
  };
};

const mapDispatchToProps = {
  addAnswer,
  answersCountIncrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
