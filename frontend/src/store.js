import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
const store = new Vuex.Store({
  state: {
    sankeyData: [['A', 'X', 5], ['A', 'Y', 7], ['A', 'Z', 6], ['B', 'X', 2], ['B', 'Y', 9], ['B', 'Z', 4]],
  actions: {
    initChart({ commit }) {
      commit('setChartData', [['A', 'X', 5], ['A', 'Y', 7], ['A', 'Z', 6], ['B', 'X', 2], ['B', 'Y', 9], ['B', 'Z', 4]]);
    },
  },
});

export { store as default };

