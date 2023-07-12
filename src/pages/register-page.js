import { Component, html } from '../../components/base'
import { withRouterLinks } from 'slick-router/middlewares/router-links'

// @withRouterLinks
class RegisterPage extends Component {
  static observedContexts = ['stores']

  render() {
    return html`
      <div class="container">
        <h2>Register Page</h2>
      </div>
    `
  }
}

customElements.define('register-page', RegisterPage)
