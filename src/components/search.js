import React from "react";
import { connect } from "react-redux";
import {
  navLinkAddQuestions,
  searchQuestionAction
} from "../store/search/actions";

class Search extends React.Component {
  searchQuestion = e => {
    if (e.target.value === "") {
      return this.props.searchQuestionAction([]);
    }
    let searchingItems = this.props.navLinkAddedQuestions.slice();
    let filters = searchingItems.filter(l => l.name.includes(e.target.value));
    if (filters.length > 0) {
      this.props.searchQuestionAction(filters);
    }
  };

  goToAnswers = k => {
    this.props.history.push({ pathname: "/answers", state: k });
  };
  render() {
    return (
      <div className='jumbotron container'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search Question'
            onChange={this.searchQuestion}
          />
        </div>

        <ul className='list-group'>
          {this.props.searchingQuestions.map((k, n) => (
            <li
              key={n}
              className='list-group-item'
              onClick={this.goToAnswers.bind(this, k)}
            >
              {k.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedQuestions: state.addQuestionReducers.addQuestionSaveReducer,
    navLinkAddedQuestions: state.navLinkReducer.navLinkAddreducer,
    searchingQuestions: state.navLinkReducer.navLinkSearchReducer
  };
};
const mapDispatchToprops = {
  navLinkAddQuestions,
  searchQuestionAction
};

export default connect(mapStateToProps, mapDispatchToprops)(Search);
