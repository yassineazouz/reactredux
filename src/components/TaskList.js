import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

import { getTasksByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const TaskList = ({ todos }) => (
  <ul className="task-list">
    {todos && todos.length
      ? todos.map((task, index) => {
          return <Task key={`task-${task.id}`} task={task} />;
        })
      : "No Tasks , Yet"}
  </ul>
);


const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTasksByVisibilityFilter(state, visibilityFilter);
  return { todos };

};

export default connect(mapStateToProps)(TaskList);
