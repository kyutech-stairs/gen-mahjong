import Vue from 'vue';
import VueRouter from 'vue-router';
import Setting from '../views/Setting.vue';
import Haipai from '../views/Haipai.vue';
import Result from '../views/Result.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'setting',
    component: Setting,
  },
  {
    path: '/haipai',
    name: 'haipai',
    component: Haipai,
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
