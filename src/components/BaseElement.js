const { LitElement } = require("@polymer/lit-element");

class BaseElement extends LitElement {
  constructor() {
    super();
    console.log("CustomLitElement instance created");
  }
  createRenderRoot() {
    return this;
  }
}

export default BaseElement;
