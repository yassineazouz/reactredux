import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TaskApp() {
  return (
    <div className="task-app">
      <h1>Task List</h1>
      <AddTask />
      <TaskList />
      <VisibilityFilters />
    </div>
  );
}
