import React from "react";
import { connect } from "react-redux";
import { toggleStudent } from '../redux/actions';
import cx from "classnames";

const StudentList = ({ studentList, toggleStudent }) => (
  <ul className="todo-list">
    {studentList && studentList.length
      ? studentList.map((e, index) => {
        let studentStr = JSON.stringify(e);
        return <li key = {index} className="todo-item" onClick={() => toggleStudent(e.id)}>
          {e && e.completed ? "👌" : "👋"}{" "}
          <span
            className={cx(
              "todo-item__text",
              e && e.completed && "todo-item__text--completed"
            )}
          >
            { studentStr}
          </span>
        </li>


      })
      : "No student found !"}
  </ul>
);


const mapStateToProps = state => {
  let { studentList } = state.students || {};
  studentList = [...studentList];
  // studentList.push({'name' : 34}); // will it affect the store ? omg , it is mutating, don't do this !
  const sNameList =
    studentList && studentList.length
      ? studentList.map(e => e.name)
      : null;

  return { studentList };
};


// export default StudentList;
export default connect(mapStateToProps, { toggleStudent })(StudentList);
