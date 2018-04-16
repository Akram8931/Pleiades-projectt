// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCharts from 'vue-charts';
import BootstrapVue from 'bootstrap-vue';

import App from './App';
import router from './router';
import store from './store/store';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';


import './assets/css/animate.css';
import './assets/css/grid.css';
import './assets/css/style.css';


Vue.use(VueCharts);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
