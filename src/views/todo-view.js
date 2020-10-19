import BaseElement from "../components/BaseElement";
import { html, css, property, customElement } from "@polymer/lit-element";
import { connect } from "pwa-helpers";

import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-button";
import "@vaadin/vaadin-checkbox";
import "@vaadin/vaadin-radio-button/vaadin-radio-button";
import "@vaadin/vaadin-radio-button/vaadin-radio-group";

import { store } from "../redux/store";

import {
  addTodo,
  clearCompleted,
  updateTodoStatus,
  updateFilter,
} from "../redux/actions";

import { VisabilityFilters } from "../redux/consts.js";
import { getVisibleTodosSelector } from "../redux/reducer";

@customElement("todo-view")
export class TodoView extends connect(store)(BaseElement) {
  constructor() {
    super();
    this.task = "";
  }

  @property({ type: Array })
  todos = [];

  @property({ type: String })
  filter = "";

  @property({ type: String })
  task = "";

  stateChanged(state) {
    this.todos = getVisibleTodosSelector(state);
    this.filter = state.filter;
  }

  render() {
    return html`
      <div class="input-layout" @keyup="${this.shortcutListener}">
        <vaadin-text-field
          value="${this.task}"
          placeholder="Task"
          @change="${this.updateTask}"
        >
        </vaadin-text-field>
        <vaadin-button theme="primary" @click="${this.addTodo}">
          Add Todo
        </vaadin-button>
      </div>

      <div class="todos-list">
        ${this.todos.map(
          (todo) => html`
            <div class="todo-item">
              <vaadin-checkbox
                ?checked="${todo.complete}"
                @change="${(e) =>
                  this.updateTodoStatus(todo, e.target.checked)}"
              >
                ${todo.task}
              </vaadin-checkbox>
            </div>
          `
        )}
      </div>

      <vaadin-radio-group
        class="visibility-filters"
        value="${this.filter}"
        @value-changed="${this.filterChanged}"
      >
        ${Object.values(VisabilityFilters).map(
          (filter) => html`
            <vaadin-radio-button value="${filter}"
              >${filter}</vaadin-radio-button
            >
          `
        )}
      </vaadin-radio-group>
      <vaadin-button @click="${this.clearCompleted}"
        >Clear Completed</vaadin-button
      >
    `;
  }

  clearCompleted() {
    store.dispatch(clearCompleted());
  }

  filterChanged(e) {
    store.dispatch(updateFilter(e.target.value));
  }

  updateTask(evt) {
    this.task = evt.target.value;
  }

  addTodo(e) {
    if (!this.task) {
      return;
    }
    // 1. add the todo
    store.dispatch(addTodo(this.task));
    // clear the task
    this.task = "";
  }

  shortcutListener(e) {
    if (e.key === "Enter") this.addTodo();
  }

  updateTodoStatus(updatedTodo, complete) {
    // create new array with updated todo
    store.dispatch(updateTodoStatus(updatedTodo, complete));
  }
}
