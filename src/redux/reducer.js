import {
  ADD_TODO,
  CLEAR_COMPLETED,
  UPDATE_FILTER,
  UPDATE_TODO_STATUS,
} from "./consts";

import { VisabilityFilters, INITIAL_STATE } from "./consts";

import { createSelector } from "reselect";

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case UPDATE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.todo === todo ? { ...todo, complete: action.complete } : todo
        ),
      };
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(({ complete }) => !complete),
      };
    default:
      return state;
  }
};

const getTodosSelector = (state) => state.todos;
const getFilterSelector = (state) => state.filter;

export const getVisibleTodosSelector = createSelector(
  getTodosSelector,
  getFilterSelector,
  (todos, filter) => {
    switch (filter) {
      case VisabilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.complete);
      case VisabilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.complete);
      default:
        return todos;
    }
  }
);
export const statsSelector = createSelector(getTodosSelector, (todos) => {
  const completed = todos.filter((t) => t.complete).length;
  return {
    completed,
    active: todos.length - completed,
  };
});
