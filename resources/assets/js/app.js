import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$eventBus = new Vue();

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});