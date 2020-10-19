export const STORAGE_KEY = "__todo_app__";

export const VisabilityFilters = {
  SHOW_ALL: "All",
  SHOW_ACTIVE: "Active",
  SHOW_COMPLETED: "Completed",
};

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const INITIAL_STATE = {
  todos: [],
  filer: VisabilityFilters.SHOW_ALL,
};
