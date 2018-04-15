// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCharts from 'vue-charts';

import App from './App';
import router from './router';
import { store } from './store';

import './assets/css/animate.css';
import './assets/css/grid.css';
import './assets/css/style.css';


Vue.use(VueCharts);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
