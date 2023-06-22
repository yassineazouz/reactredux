import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTask } from "../redux/actions";

const Task = ({ task, toggleTask }) => (
  <li className="task-item" onClick={() => toggleTask(task.id)}>
    {task && task.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "task-item__text",
        task && task.completed && "task-item__text--completed"
      )}
    >
      {task.content}
    </span>
  </li>
);


export default connect(
  null,
  { toggleTask }
)(Task);
