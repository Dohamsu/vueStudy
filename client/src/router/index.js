import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HOM/HOM0100.vue'
import Reservation from '../views/RES/RES0100.vue'
import About from '../views/ABO/ABO0100.vue'
import History from '../views/HIS/HIS0100.vue'
import Croll from '../views/HOM/components/HOM0100_croll.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signup',
    name: 'signup',
    component: Home
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/croll',
    name: 'croll',
    component: Croll
  }
]

console.log(process.env);

const router = new VueRouter({
  mode : 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
