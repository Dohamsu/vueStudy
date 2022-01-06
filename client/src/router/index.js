import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HOM/HOM0100.vue'
import About from '../views/HOM/HOM0200.vue'

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
  }
]


console.log("환경설정");
console.log(process.env);
console.log(routes  );

const router = new VueRouter({
  mode : 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
