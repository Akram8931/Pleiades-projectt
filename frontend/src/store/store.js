import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


const state = {
  modalShow: false,
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
  PieGenderRows: [
    ['Age2004', 1000],
    ['Age2005', 1170],
    ['Age2006', 660],
    ['Age2007', 1030],
    ['Age2007', 1030],
    ['Age2008', 1000],
  ],
  PieAgeRows: [
    ['Age2004', 1000],
    ['Age2005', 1170],
    ['Age2006', 660],
    ['Age2007', 1030],
    ['Age2007', 1030],
    ['Age2008', 1000],
  ],
  PieRaceRows: [
    ['Age2004', 1000],
    ['Age2005', 1170],
    ['Age2006', 660],
    ['Age2007', 1030],
    ['Age2007', 1030],
    ['Age2008', 1000],
  ],
  PieGenderOptions: {
    title: 'GENDER',
    width: 600,
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
    width: 600,
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
    width: 600,
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
  DrawMapChart(state) {
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

    window.google.visualization.events.addListener(geochart, 'select', () => {
      debugger;
      const selection = geochart.getSelection()[0];
      const stateName = state.USStates[selection.row + 1];
      state.modalShow = !state.modalShow;
      // state.dispatch('loadPieChart', stateName);
    });
  },
  showModal() {
    debugger;
    state.modalShow = !state.modalShow;
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
    debugger;
    //   axios.get(`/user?stateName=${stateName}`).then((Response) => {
    // //   context.commit('GenderData', Response.data.GenderData);
    //     context.commit('SetAgeData', Response.data.AgeData);
    //     context.commit('SetRaceData', Response.data.RaceData);
    //   });
    context.commit('showModal');
  },
};


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
