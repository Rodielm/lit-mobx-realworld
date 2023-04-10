import { LitElement, html } from "lit";
import { configure as configureMobx } from 'mobx'
import RootStore from "./stores/rootStore"
import { createRouter } from "./router"
import "./blog-app.js"
import agent from "./agent.js"


const stores = new RootStore();

// To access by the console.
window._____APP_STATE_____ = stores

configureMobx({ enforceActions: "observed" })
agent.configure(stores)

const router = createRouter(stores)
router.listen()


export class RootApp extends LitElement {

  createRenderRoot() {
    return this
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <blog-app
        .stores=${stores}>
      </blog-app>
    `;
  }

}
customElements.define('root-app', RootApp);