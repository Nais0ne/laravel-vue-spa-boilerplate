import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import VuexStore from './vuex/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee)

Vue.use(Vuex);
const store = new Vuex.Store(VuexStore);
sync(store, router);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$eventBus = new Vue();

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});