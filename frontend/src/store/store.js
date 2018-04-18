import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

const state = {
  modalShow: false,
  USStates: [],
  colomn: ['State', 'No of hospital employees'],
  PieGenderRows: [],
  PieAgeRows: [],
  PieRaceRows: [],
  stateName: null,
  stateFaces: {
    Florida: 'fl',
    Washington_DC: 'wa',
    Texas: 'tx',
    Utah: 'ut',
    Michigan: 'mi',
    New_York: 'ny',
    Oklahoma: 'ok',
    Tennessee: 'tn',
    Missouri: 'mo',
    North_Carolina: 'nc',
    California: 'ca',
    Illinois: 'il',
  },
  statePrev: '',
  functionalChartData: [],
  crossOrgChartData: [],
  activeChartData: [],
  selectedNode: [],
  token: localStorage.getItem('user-token') || '',
  status: '',
  expiryDate: localStorage.getItem('expiry-date') || '',
  isExpired: true,
};
const getters = {};
const mutations = {
  SetUSMapData(state, Res) {
    state.USStates = Res;
    state.USStates.unshift(state.colomn);
  },

  SetGenderData(state, Res) {
    state.PieGenderRows = Res;
  },
  SetAgeData(state, Res) {
    state.PieAgeRows = Res;
  },
  SetRaceData(state, Res) {
    state.PieRaceRows = Res;
  },
  showModal() {
    state.modalShow = !state.modalShow;
  },
  changeStateName(state, Selection) {
    state.stateName = `${Selection} State`;
    if (Selection.split(' ').length === 1) {
      state.statePrev = state.stateFaces[Selection];
    } else {
      const newSelection = `${Selection.split(' ')[0]}_${Selection.split(' ')[1]}`;
      state.statePrev = state.stateFaces[newSelection];
    }
  },
  setFunctionalChartData(state, payload) {
    state.functionalChartData = payload;
  },

  setCrossOrgChartData(state, payload) {
    state.crossOrgChartData = payload;
  },
  getSelectedNode(state, selectedNodeName) {
    state.selectedNode = _.filter(state.activeChartData, (o) => {
      if (o.indexOf(selectedNodeName) > -1) {
        return o;
      }
    });
  },
  activeChartData(state, payload) {
    if (payload === 'functional') {
      state.activeChartData = state.functionalChartData;
    } else if (payload === 'cross-org') {
      state.activeChartData = state.crossOrgChartData;
    }

    state.selectedNode = state.activeChartData;
  },
  reDrawMainChart(state) {
    state.selectedNode = state.activeChartData;
  },

  // Login methods
  AUTH_REQUEST(state) {
    state.status = 'loading';
  },
  AUTH_SUCCESS(state, payload) {
    state.status = 'success';
    state.token = payload.token;
    state.expiryDate = payload.expiryDate;
    if (Date.now() < state.expiryDate) {
      state.isExpired = false;
    }
  },
  AUTH_ERROR(state) {
    state.status = 'error';
  },
  checkExpiryDate(state, ExpiryDate) {
    const currentDate = Date.now();
    if (currentDate < ExpiryDate) {
      state.isExpired = false;
    }
  },
};
const actions = {
  // api of US Map
  loadUSAMap(context) {
    axios.get('http://192.168.1.131:3000/us_map').then((Response) => {
      context.commit('SetUSMapData', Response.data);
    });
  },
  // api of Pie Charts
  loadPieChart(context, stateName) {
    axios
      .get(`http://192.168.1.131:3000/race_gender_age/${stateName}`)
      .then((Response) => {
        context.commit('SetGenderData', Response.data.gender);
        context.commit('SetAgeData', Response.data.age);
        context.commit('SetRaceData', Response.data.race);
      })
      .then(() => {
        context.commit('showModal');
      });
  },
  initChart({ commit }) {
    axios.get('http://192.168.1.131:3000/functional_capability')
      .then((response) => {
        commit('setFunctionalChartData', response.data);
      });


    axios.get('http://192.168.1.131:3000/cross_org_capability')
      .then((response) => {
        commit('setCrossOrgChartData', response.data);
      });
  },
  // Login Api
  AUTH_REQUEST({ commit }, user) {
    const NPromise = new Promise((resolve, reject) => {
      commit('AUTH_REQUEST');
      axios({ url: 'http://localhost:3000/login', data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.token;
          const expiryDate = resp.data.expiryDate;

          localStorage.setItem('user-token', token); // store the token in localstorage
          localStorage.setItem('expiry-date', expiryDate); // store the expiry date in localstorage
          commit('AUTH_SUCCESS', { token, expiryDate });
          resolve(resp);
        }).catch((err) => {
          commit('AUTH_ERROR', err);
          localStorage.removeItem('user-token'); // if the request fails, remove any possible user token if possible
          localStorage.removeItem('expiry-date'); // if the request fails, remove any possible user expiry date if possible

          reject(err);
        });
    });
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
