import { Component, html } from '../../components/base'
import { withRouterLinks } from 'slick-router/middlewares/router-links'
import Banner from './Banner'
import Tags from './Tags'
import './home-main-view'

@withRouterLinks
class HomePage extends Component {
  static observedContexts = ['stores']

  static properties = {
    $router: {},
  }

  // Invoked when a component is added to the document's DOM.
  connectedCallback() {
    super.connectedCallback()
    this.stores.commonStore.loadTags()
  }

  tabChanged(e) {
    this.$router.transitionTo('home', {}, { tab: e.detail })
  }

  render() {
    const { tags, token, appName } = this.stores.commonStore
    const query = this.$route ? this.$route.query : {}
    return html`
      <div class="home-page">
        ${Banner({ token: token, appName: appName })}
        <div class="container page">
          <div class="row">
            <home-main-view
              class="col-md-9"
              .tag="${query.tag}"
              .tab="${query.tab}"
              @tab-changed=${this.tabChanged}
            ></home-main-view>
            <div class="col-md-3">
              <div class="sidebar">
                <p>Popular Tags</p>
                ${Tags({ tags })}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('home-page', HomePage)
