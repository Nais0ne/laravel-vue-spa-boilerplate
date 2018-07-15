import Vue from 'vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee)

Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import App from './App'

import Home from './views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});