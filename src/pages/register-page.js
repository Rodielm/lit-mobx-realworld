import { Component, html } from '../components/base';
import '../components/list-errors';

class RegisterPage extends Component {
  static observedContexts = ['stores'];

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stores.authStore.reset();
  }

  onChangeUsername = e => this.stores.authStore.setUsername(e.target.value);

  onChangeEmail = e => this.stores.authStore.setEmail(e.target.value);

  onChangePasswords = e => this.stores.authStore.setPasswords(e.target.value);

  onSubmitForm = e => {
    e.preventDefault();
    this.stores.authStore
      .register()
      .then(() => this.$router.replaceWith('home'));
  };

  render() {
    const { values, errors, inProgress } = this.stores.authStore;

    return html`
      <div class="auth-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Sign Up</h1>
              <p class="text-xs-center">
                <a url="login">Have an account?</a>
              </p>
              <list-errors .errors=${errors}></list-errors>
              <form @submit=${this.onSubmitForm}>
                <fieldset>
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      .value=${values.username}
                      @change=${this.onChangeUsername} />
                  </fieldset>
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      .value=${values.email}
                      @change=${this.onChangeEmail} />
                  </fieldset>
                  <fieldset class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      .value=${values.password}
                      @change=${this.onChangePasswords} />
                  </fieldset>
                  <button
                    class="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    ?disabled=${inProgress}>
                    Sign in
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('register-page', RegisterPage);
