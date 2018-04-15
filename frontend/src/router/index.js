import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/login';
import Home from '@/pages/Home';
import OD from '@/pages/OD';
import ODMap from '@/pages/ODMap';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/OD',
      name: 'OD',
      component: OD,
    },
    {
      path: '/',
      name: 'ODMap',
      component: ODMap,
    },
  ],
});
