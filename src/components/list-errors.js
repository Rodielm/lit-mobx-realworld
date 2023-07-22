import { Component, html, nothing } from './base';

class ListErrors extends Component {
  static properties = {
    errors: {},
  };

  render() {
    const errors = this.errors;
    if (errors) {
      return html`
        <ul class="error-messages">
          ${Object.keys(errors).map(key => {
            return html` <li>${key} ${errors[key]}</li> `;
          })}
        </ul>
      `;
    } else {
      return nothing;
    }
  }
}

customElements.define('list-errors', ListErrors);
