import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/store';

import Login from '@/pages/login';
import Home from '@/pages/Home';
import OD from '@/pages/OD';
import ODLink from '@/pages/ODLink';
import Demographic from '@/components/Demographic';
import ChartSankey from '@/components/ChartSankey';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
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
      path: '/ODLink/:ODType',
      name: 'ODLink',
      component: ODLink,
      children: [
        { path: '', component: Demographic },
        { path: ':name', component: ChartSankey },
      ],
    },
  ],
  linkActiveClass: 'activeLink',
});


router.beforeEach((to, from, next) => {
  const isAuthorized = store.state.token !== '' && !store.state.isExpired;
  if (to.name === 'Login' || isAuthorized) {
    next();
  } else {
    next({ name: 'Login' });
  }
});


export default router;
