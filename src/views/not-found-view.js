import { html } from "@polymer/lit-element";
const { default: BaseElement } = require("../components/BaseElement");

class NotFoundView extends BaseElement {
  render() {
    return html` <h1>Not Found!</h1> `;
  }
}

customElements.define("not-found-view", NotFoundView);
