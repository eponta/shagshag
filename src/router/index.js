import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TheBand from '../views/TheBand.vue'
import Music from '../views/Music.vue'
import Quotes from '../views/Quotes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: Quotes
  },
  {
    path: '/theband',
    name: 'TheBand',
    component: TheBand
  }
]

const router = new VueRouter({
  routes
})

export default router
