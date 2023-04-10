import { Component, html } from '../../components/base'
import { withRouterLinks } from 'slick-router/middlewares/router-links'

@withRouterLinks
class HomePage extends Component {
  static observedContexts = ['stores']

  render() {
    return html`
      <div class="container">
        <h2>Home Page</h2>
      </div>
    `
  }
}

customElements.define('home-page', HomePage)
