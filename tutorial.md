# LitElement

https://youtu.be/s6P3R-J0IiI?t=605
https://www.youtube.com/watch?v=_Gt12UhGLY0

## Getting started

Install the LitElement library.

```bash
$ npm install --save @polymer/lit-element
```

Install a few WebComponents we'll be working with.

```bash
$ npm install --save @vaadin/vaadin-text-field @vaadin/vaadin-button @vaadin/vaadin-checkbox @vaadin/vaadin-radio-button
```

## Templating, properties, and events.

Create Component class:

```js
class TodoView extends LitElement {
  constructor() {
    super();
    this.todos = [];
    this.filter = VisabilityFilters.SHOW_ALL;
    this.task = "";
  }

  static get properties() {
    return {
      todos: { type: Array },
      filter: { type: String },
      task: { type: String },
    };
  }

  render() {
    return html`
      <div class="input-layout">
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
    `;
  }
  // disables shadow DOM by returning this html element as the root render element.
  createRenderRoot() {
    return this;
  }
}
```

reducer - function that takes the current state and action as arguments, and returns a new copy of the updated state

import { connect } from "pwa-helpers";

export class ClassBame extends connect(store)(BaseElement)

action creators considered best practice

- can transform action payload before reducer

`reselect` used to create derived state

Routing and code spliting

`@vaadin/router`
