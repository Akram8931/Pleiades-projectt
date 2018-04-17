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
  },
  statePrev: '',
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
    state.statePrev = state.stateFaces[Selection];
  },
};
const actions = {
  // api of US Map
  loadUSAMap(context) {
    axios.get('http://red-alphar.com/us_map').then((Response) => {
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
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
