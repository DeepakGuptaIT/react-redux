import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleStudent } from "../redux/actions";

const Student = ({ todo, toggleStudent }) => (
  <li className="todo-item" onClick={() => toggleStudent(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

// export default Student;
export default connect(
  null,
  { toggleStudent }
)(Student);
