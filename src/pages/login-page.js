import { Component, html } from '../components/base'
import { withRouterLinks } from 'slick-router/middlewares/router-links'

class LoginPage extends Component {
  static observedContexts = ['stores']


  render() {
    return html`
      <div class="container">
        <h2>Login Page</h2>
      </div>
    `
  }
}

customElements.define('login-page', LoginPage)
