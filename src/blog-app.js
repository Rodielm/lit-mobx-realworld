import { Component, html } from './components/base';
import {
  AnimatedOutlet,
  GenericCSS,
  registerAnimation,
} from 'slick-router/components/animated-outlet';

import './components/app-header';

class RevealAnimation extends GenericCSS {
  leave(outlet, el, done) {
    super.leave(outlet, el, done);
    outlet.removeAttribute('animation');
  }
}

registerAnimation('reveal', RevealAnimation);
customElements.define('outlet-elm', AnimatedOutlet);

export class BlogApp extends Component {
  static properties = {
    stores: {
      type: Object,
      attribute: false,
    },
  };

  static providedContexts = {
    stores: {
      property: 'stores',
    },
  };

  firstUpdated() {
    if (this.stores.commonStore.token) {
      this.stores.userStore
        .pullUser()
        .finally(() => this.stores.commonStore.setAppLoaded());
    } else {
      this.stores.commonStore.setAppLoaded();
    }
  }

  render() {
    const token = this.stores.commonStore.token;
    return html`
      <div>
        <app-header></app-header>
        <outlet-elm animation="reveal">
          <div class="splah-screen">
            Welcome ${token ? 'back' : ''}<br />
            Wait a second...
          </div>
        </outlet-elm>
      </div>
    `;
  }
}

customElements.define('blog-app', BlogApp);
