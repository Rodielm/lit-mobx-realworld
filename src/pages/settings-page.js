import { Component, html } from '../components/base'

class SettingsPage extends Component {
  static observedContexts = ['stores']

  render() {
    return html`
      <div class="container">
        <h2>Settings Page</h2>
      </div>
    `
  }
}

customElements.define('settings-page', SettingsPage)
