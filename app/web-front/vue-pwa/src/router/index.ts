import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Setting from '../views/Setting.vue';
import Haipai from '../views/Haipai.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/haipai',
    name: 'haipai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Haipai,
  },
  {
    path: '/setting',   // new add
    name: 'setting',    // new add
    component: Setting,  // new add
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
