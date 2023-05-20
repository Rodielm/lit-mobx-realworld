import { LitElement, html } from "lit";
import { configure as configureMobx } from 'mobx'
import RootStore from "./stores/rootStore"
import { createRouter } from "./router"
import agent from "./agent.js"
import "./blog-app.js"

// Global //

// initialise store 
const stores = new RootStore();

// To access by the console.
window._____APP_STATE_____ = stores

configureMobx({ enforceActions: "observed" })

// pass stores to agent and routers
agent.configure(stores)
const router = createRouter(stores)
router.listen()

// 

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