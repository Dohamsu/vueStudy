import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HOM/HOM0100.vue'
import About from '../views/HOM/HOM0200.vue'
import SignUp from '../views/ACC/ACC0100.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
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
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
