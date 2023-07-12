import { Component, html } from '../../components/base'
import { withRouterLinks } from 'slick-router/middlewares/router-links'

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
