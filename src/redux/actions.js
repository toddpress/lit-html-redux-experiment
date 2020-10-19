import { nanoid } from "nanoid";

import {
  ADD_TODO,
  UPDATE_TODO_STATUS,
  UPDATE_FILTER,
  CLEAR_COMPLETED,
} from "./consts";

// action creators
export const addTodo = (task) => ({
  type: ADD_TODO,
  todo: {
    id: nanoid(),
    task,
    complete: false,
  },
});

export const updateTodoStatus = (todo, complete) => ({
  type: UPDATE_TODO_STATUS,
  todo,
  complete,
});

export const updateFilter = (filter) => ({
  type: UPDATE_FILTER,
  filter,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
