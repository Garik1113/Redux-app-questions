import React from "react";
import { Link } from "react-router-dom";

class NavLink extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/answers" className="nav-link">
              Answers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addquestion" className="nav-link">
              Add Question
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/topquestions" className="nav-link">
              Top Questions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavLink;
