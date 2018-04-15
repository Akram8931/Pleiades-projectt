import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/login';
import Home from '@/pages/Home';
import OD from '@/pages/OD';
import ODLink from '@/pages/ODLink';
import Demographic from '@/components/Demographic';

Vue.use(Router);

export default new Router({
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
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: Demographic },
      ],
    },
    // {
    //   path: '/Demographic',
    //   name: 'Demographic',
    //   component: Demographic,
    // },
  ],
});
