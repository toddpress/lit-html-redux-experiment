const { default: BaseElement } = require("../components/BaseElement");
import { html } from "@polymer/lit-element";
import { store } from "./../redux/store";
import { connect } from "pwa-helpers";
import { statsSelector } from "../redux/reducer";

class StatsView extends connect(store)(BaseElement) {
  static get styles() {}

  render() {
    return html`
      <h1>Stats View</h1>
      <div class="stats__detail">
        ${this.stats.active
          ? html` <pre class="stats">
${JSON.stringify(this.stats, null, 4)}</pre
            >`
          : html` <p class="stats--empty">There's nothing to do 🌴</p> `}
      </div>
    `;
  }

  stateChanged(state) {
    const stats = statsSelector(state);
    this.stats = stats;
  }
}

customElements.define("stats-view", StatsView);
