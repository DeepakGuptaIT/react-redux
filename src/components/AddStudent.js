import React from "react";
import { connect } from "react-redux";
import { addStudent } from "../redux/actions";
import { addTodo } from "../redux/actions";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", marks: "" };
  }

  updateInput = (key, input) => {
    if (key == 'id')
      this.setState({ id: input });
    if (key == 'name')
      this.setState({ name: input });
    if (key == 'marks')
      this.setState({ marks: input });
    // console.log(this.state)
  };

  handleAddStudent = () => {
    this.props.addStudent(this.state);
    this.props.addTodo(this.state.name);
    // this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput('id', e.target.value)}
          value={this.state.id}
        />
        <input
          onChange={e => this.updateInput('name', e.target.value)}
          value={this.state.name}
        />
        <input
          onChange={e => this.updateInput('marks', e.target.value)}
          value={this.state.marks}
        />
        <button className="add-todo" onClick={this.handleAddStudent}>
          Add Student
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo, addStudent }
)(AddStudent);
// export default AddStudent;
