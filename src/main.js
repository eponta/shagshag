import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* FONT AWESOME */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpotify, faDeezer, faYoutube, faInstagram, faFacebook, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpotify, faDeezer, faYoutube, faInstagram, faFacebook, faSoundcloud, faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* YOUTUBE API */
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
