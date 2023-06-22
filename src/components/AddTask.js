import React from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTask = () => {
    this.props.addTask(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-task" onClick={this.handleAddTask}>
          Add Task
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(AddTask);

