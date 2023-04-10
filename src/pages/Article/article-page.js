import { Component, html } from '../../components/base'
// import { withRouterLinks } from 'slick-router/middlewares/router-links'

class ArticlePage extends Component {
  static observedContexts = ['stores']

  static properties = {
    slug: { type: String }
  }

  set $route(value) {
    this.slug = value.params.id
  }

  render() {
    return html`
      <div class="container">
        <h2>Article Page, param: ${this.slug}</h2>
      </div>
    `
  }
}

customElements.define('article-page', ArticlePage)
