
import { MobxReactionUpdate } from "@adobe/lit-mobx";
import { LitElement, html } from "lit";
import { classMap } from "lit-html/directives/class-map.js"
import { styleMap } from "lit-html/directives/style-map.js"
import { repeat } from "lit-html/directives/repeat.js"
import { unsafeHTML } from "lit-html/directives/unsafe-html.js"
import { ifDefined } from "lit-html/directives/if-defined.js"
import { withContext } from "wc-context";

// This a base component withContext and MobxReactionUpdate  
class Component extends withContext(MobxReactionUpdate(LitElement)) {
    createRenderRoot() {
        return this
    }
}


export { Component, html, styleMap, classMap, repeat, unsafeHTML, ifDefined }