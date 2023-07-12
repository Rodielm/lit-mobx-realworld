import { Component, html } from '../components/base'
import { withRouterLinks } from 'slick-router/middlewares/router-links'

class ProfilePage extends Component {

  static observedContexts = ['stores']

  render() {
    return html`
      <div class="container">
        <h2>Profile Page</h2>
      </div>
    `
  }
}

customElements.define('profile-page', ProfilePage)
