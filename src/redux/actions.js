import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTaskId = 0;

export const addTask = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTaskId,
    content
  }
});

export const toggleTask = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
