import { Component, html } from '../components/base'
import { withRouterLinks } from 'slick-router/middlewares/router-links'

class EditorPage extends Component {
  static observedContexts = ['stores']

  static properties = {
    slug: { type: String }
  }

  set $route(value) {
    this.slug = value.params.slug
  }

  render() {
    return html`
      <div class="container">
        <h2>Editor Page, param: ${this.slug}</h2>
      </div>
    `
  }
}

customElements.define('editor-page', EditorPage)
