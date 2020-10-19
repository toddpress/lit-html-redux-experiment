import { createStore } from "redux";
import { reducer } from "./reducer";
import { STORAGE_KEY } from "./consts";

const saveState = (state) => {
  const stringified = JSON.stringify(state);
  window.localStorage.setItem(STORAGE_KEY, stringified);
};

const loadState = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : undefined;
};

export const store = createStore(
  reducer, // reducer
  loadState(), // preloaded state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});
