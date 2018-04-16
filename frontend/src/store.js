import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sankeyData: [['A', 'X', 5], ['A', 'Y', 7], ['A', 'Z', 6], ['B', 'X', 2], ['B', 'Y', 9], ['B', 'Z', 4]],
    selectedNode: [],
  },
  mutations: {
    setChartData(state, sankeyData) {
      state.selectedNode = sankeyData;
    },
    getSelectedNode(state, selectedNodeName) {
      state.selectedNode = _.filter(state.sankeyData, (o) => {

        if (o.indexOf(selectedNodeName) > -1) {
          return o;
        }

      });
    },
  },
  actions: {
    initChart({ commit }) {
      commit('setChartData', [['A', 'X', 5], ['A', 'Y', 7], ['A', 'Z', 6], ['B', 'X', 2], ['B', 'Y', 9], ['B', 'Z', 4]]);
    },
  },
});

export { store as default };

