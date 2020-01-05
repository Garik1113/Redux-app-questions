import React from "react";
import { connect } from "react-redux";
import {
  addQuestionNameAction,
  addQuestionSelectAction,
  addQuestionChangeTitle,
  addQuestionSave
} from "../store/addQuestion/actions";

import { navLinkAddQuestions } from "../store/search/actions";

class AddQuestion extends React.Component {
  changeName = e => {
    this.props.addQuestionNameAction(e.target.value);
  };

  selectCategory = e => {
    this.props.addQuestionSelectAction(e.target.value);
  };
  save = () => {
    if (
      this.props.name === "" ||
      this.props.category === "" ||
      this.props.category === "..."
    ) {
      return this.props.addQuestionChangeTitle("Fill all inputs");
    } else {
      let questionList = {
        name: this.props.name,
        category: this.props.category,
        countOfAnswers: 0,
        answers: []
      };
      this.props.addQuestionSave(questionList);
      this.props.navLinkAddQuestions(questionList);
      this.props.addQuestionChangeTitle("");
      this.props.addQuestionNameAction("");
      return alert("Saved");
    }
  };
  render() {
    return (
      <div className='container jumbotron'>
        <h1>Add Question</h1>
        <label style={{ color: "red" }}>{this.props.title}</label>
        <input
          type='text'
          className='form-control'
          placeholder='Name Of Question'
          value={this.props.name}
          onChange={this.changeName}
        />

        <hr />
        <label>Select category</label>
        <select className='form-control' onClick={this.selectCategory}>
          <option>...</option>
          <option>Programing</option>
          <option>Sport</option>
          <option>Culture</option>
          <option>Science</option>
        </select>
        <button className='btn btn-primary' onClick={this.save}>
          Save
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.addQuestionReducers.addQuestionCategoryReducer,
    title: state.addQuestionReducers.addQuestionTitleReducer,
    save: state.addQuestionReducers.addQuestionSaveReducer,
    name: state.addQuestionReducers.addQuestionNameReducer
  };
};
const mapDispatchToProps = {
  addQuestionSelectAction,
  addQuestionChangeTitle,
  addQuestionSave,
  addQuestionNameAction,
  navLinkAddQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
