import { LitElement, html, css } from "lit-element";
import "app-datepicker";

class MyApp extends LitElement {
  constructor() {
    super(...arguments);
  }

  render() {
    return html`
      <h3>app-datepicker Demo</h3>
      <app-datepicker></app-datepicker>
    `;
  }
}

MyApp.styles = [
  css`
    :host {
      display: block;
      color: #757575;
    }

    [hidden] {
      display: none;
    }
  `
];

customElements.define("my-app", MyApp);
