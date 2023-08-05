import { Component, html, nothing } from '../components/base';
import '../components/red-error';
import '../components/loading-spinner';
import ArticleList from '../components/ArticleList';
import { bindRouterLinks } from 'slick-router/middlewares/router-links';

const renderEditProfileSettings = props => {
  if (props.isUser) {
    return html`
      <a href="#settings" class="btn btn-sm btn-outline-secondary action-btn">
        <i class="ion-gear-a"></i>
        Edit Profile Settings
      </a>
    `;
  }
  return nothing;
};

const renderFollowUserBtn = props => {
  if (props.isUser) {
    return nothing;
  }

  let classes = 'btn btn-sm action-btn';
  if (props.following) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }

  const onClick = ev => {
    ev.preventDefault();
    if (props.following) {
      props.unfollow(props.username);
    } else {
      props.follow(props.username);
    }
  };

  return html`
    <button class=${classes} @click=${onClick}>
      <i class="ion-plus-round"></i> ${props.following ? 'Unfollow' : 'Follow'}
      ${props.username}
    </button>
  `;
};

class ProfilePage extends Component {
  static observedContexts = ['stores'];

  static properties = {
    username: { type: String },
    pathname: { type: String },
  };

  set $route(value) {
    this.username = value.params.username;
    this.pathname = value.params.pathname;
  }

  updated() {
    if (!this.disposeRouterLinks) {
      const rootEls = this.querySelector('[routerlinks]');
      if (rootEls) {
        this.disposeRouterLinks = bindRouterLinks(this);
      }
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}

  shouldUpdate(changeProperties) {
    // avoid reloading data just after connect
  }

  getTab() {}

  getPredicate() {}

  onFollow = () => {};
  onUnFollow = () => {};

  onSetPage = () => {};

  renderTabs() {
    
  }

  render() {
    return html`
      <div class="container">
        <h2>Profile Page</h2>
      </div>
    `;
  }
}

customElements.define('profile-page', ProfilePage);
