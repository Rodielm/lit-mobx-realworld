import { observe } from "mobx"
import { Router } from 'slick-router';
import { wc } from "slick-router/middlewares/wc";
import {
    routerLinks,
    withRouterLinks
} from 'slick-router/middlewares/router-links'


export function createRouter(stores) {
    const appLoaded = new Promise(resolve => {
        const disposer = observe(
            stores.commonStore,
            "appLoaded",
            ({ newValue }) => {
                if (newValue) {
                    resolve()
                    disposer()
                }
            }
        )
    })

    const routes = [
        {
            name: "app",
            path: "/",
            beforeEnter: () => appLoaded,
            children: [
                {
                    name: 'home',
                    component: 'home-page',
                    path: ''
                },
                {
                    name: 'login',
                    component: 'login-page'
                },
                { name: 'register', component: 'register-page' },
                { name: 'editor', component: 'editor-page', path: 'editor/:slug?' },
                { name: 'article', component: 'article-page', path: 'article/:id' },
            ]
        }
    ]

    const router = new Router({ routes, outlet: 'outlet-elm', log: true });
    router.use(wc)
    router.use(routerLinks)
    return router;
}

export { withRouterLinks }