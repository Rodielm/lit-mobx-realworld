import { LitElement, html } from "lit";
import { configure as configureMobx } from 'mobx'
import RootStore from "./stores/rootStore"
import { createRouter } from "./router"
import "./blog-app.js"
import agent from "./agent.js"


const stores = new RootStore();

window._____APP_STATE_____ = stores

configureMobx({ enforceActions: "observed" })
agent.configure(stores)

const router = createRouter(stores)
router.listen()
console.log("testinggggs", stores);

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