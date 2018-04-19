import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/store';

import Login from '@/pages/login';
import Home from '@/pages/Home';
import OD from '@/pages/OD';
import CrossOrg from '@/pages/CrossOrg';
import Functional from '@/pages/Functional';

import ODLink from '@/pages/ODLink';
import Demographic from '@/components/Demographic';

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
        { path: 'CrossOrg', component: CrossOrg },
        { path: 'Functional', component: Functional },
      ],
    },
  ],
  linkActiveClass: 'activeLink',
});


router.beforeEach((to, from, next) => {
  const isAuthorized = store.state.token !== '' && store.state.isExpired === 'false';

  if (to.name !== 'Login') {
    if (isAuthorized) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});


export default router;
