import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


const state = {
  USStates: [],
  AllUSStates: [],
  colomn: ['State', 'No of hospital employees'],
  PieColumns: [
    {
      type: 'string',
      label: 'Year',
    },
    {
      type: 'number',
      label: 'Sales',
    },
  ],
  PieGenderRows: [],
  PieAgeRows: [],
  PieRaceRows: [],
  PieGenderOptions: {
    title: 'GENDER',
    width: 700,
    height: 500,
    curveType: 'function',
    is3D: true,
    legend: 'none',
    slices: {
      0: { color: '#0c586f' },
      1: { color: 'black' },
      2: { color: '#a7b0b7' },
      3: { color: 'orange' },
    },
    backgroundColor: 'none',
  },
  PieAgeOptions: {
    title: 'Age',
    width: 700,
    height: 500,
    curveType: 'function',
    is3D: true,
    legend: 'none',
    slices: {
      0: { color: '#0c586f' },
      1: { color: 'black' },
      2: { color: '#a7b0b7' },
      3: { color: 'orange' },
    },
    backgroundColor: 'none',
  },
  PieRaceOptions: {
    title: 'Race',
    width: 700,
    height: 500,
    curveType: 'function',
    is3D: true,
    legend: 'none',
    slices: {
      0: { color: '#0c586f' },
      1: { color: 'black' },
      2: { color: '#a7b0b7' },
      3: { color: 'orange' },
    },
    backgroundColor: 'none',
  },
};
const getters = {};
const mutations = {
  SetUSMapData(state, Res) {
    state.USStates = Res;
    state.USStates.unshift(state.colomn);
  },

  SetGenderData(state, Res) {
    state.GenderData = Res;
  },
  SetAgeData(state, Res) {
    state.AgeData = Res;
  },
  SetRaceData(state, Res) {
    state.RaceData = Res;
  },
  DrawMapChart() {
    window.google.load('visualization', '1', { packages: ['geochart'] });
    const data = window.google.visualization.arrayToDataTable(state.USStates);

    const opts = {
      title: 'Popularity by Countries',
      width: '100%',
      height: 500,
      region: 'US',
      displayMode: 'regions',
      colorAxis: { colors: ['#0c586f', 'black', '#a7b0b7'] },
      backgroundColor: 'none',
      datalessRegionColor: 'white',
      defaultColor: 'white',
      resolution: 'provinces',
    };
    const geochart = new window.google.visualization.GeoChart(
      document.getElementById('visualization'),
    );
    geochart.draw(data, opts);
  },
};
const actions = {
  // api of US Map
  loadUSAMap(context) {
    axios
      .get('http://red-alphar.com/us_map')
      .then((Response) => {
        context.commit('SetUSMapData', Response.data);
      })
      .then(() => {
        context.commit('DrawMapChart');
      });
  },
  // api of Pie Charts
  loadPieChart(context, stateName) {
    axios.get(`/user?stateName=${stateName}`).then((Response) => {
      context.commit('GenderData', Response.data.GenderData);
      context.commit('SetAgeData', Response.data.AgeData);
      context.commit('SetRaceData', Response.data.RaceData);
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
