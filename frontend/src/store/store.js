import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

const State = {
  USStates: [
    ['Alabama', 12],
    ['Alaska', 121],
    ['Arizona', 222],
    ['Arkansas', 100],
    ['California', 120],
    ['Colorado', 140],
    ['Connecticut', 160],
    ['Delaware', 200],
    ['Florida', 239],
    ['Georgia', 234],
    ['Hawaii', 278],
    ['Idaho', 289],
    ['Illinois', 290],
    ['Indiana', 289],
    ['Iowa', 300],
    ['Kansas', 345],
    ['Kentucky', 370],
    ['Louisiana', 367],
    ['Maine', 390],
    ['Maryland', 400],
    ['Massachusetts', 420],
    ['Michigan', 450],
    ['Minnesota', 460],
    ['Mississippi', 576],
    ['Missouri', 789],
    ['Montana', 677],
    ['Nebraska', 876],
    ['Nevada', 453],
    ['New Hampshire', 674],
    ['New Jersey', 510],
    ['New Mexico', 610],
    ['New York', 345],
    ['North Carolina', 349],
    ['North Dakota', 800],
    ['Ohio', 867],
    ['Oklahoma', 590],
    ['Oregon', 865],
    ['Pennsylvania', 920],
    ['Rhode Island', 910],
    ['South Carolina', 860],
    ['South Dakota', 960],
    ['Tennessee', 7],
    ['Texas', 32],
    ['Utah', 765],
    ['Vermont', 98],
    ['Virginia', 640],
    ['Washington', 999],
    ['West Virginia', 943],
    ['Wisconsin', 45],
    ['Wyoming', 100],
  ],
  GenderData: [],
  AgeData: [],
  RaceData: [],

  MSG: 'message',
  chartEvents: {
  },


  columns: [{
    type: 'string',
    label: 'State',
  }, {
    type: 'number',
    label: 'No Of Employees',
  }],
  options: {
    title: 'Popularity by Countries',
    width: '100%',
    height: 500,
    region: 'US',
    displayMode: 'regions',
    colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
    backgroundColor: 'white',
    datalessRegionColor: '#eee',
    defaultColor: '#f5f5f5',
    resolution: 'provinces',
  },
};

const getters = {};

const mutations = {
  SetUSMapData(state, Res) {
    state.USStates = Res;
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
};

const actions = {
  // api of US Map
  loadUSAMap(context) {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=7fbb7eab908b494395dfddbb8268ec74',
      )
      .then((Response) => {
        context.commit('USStates', Response.data.articles);
      });
  },
  // api of Pie Charts
  loadPieChart(context) {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=&apiKey=7fbb7eab908b494395dfddbb8268ec74',
      )
      .then((Response) => {
        context.commit('GenderData', Response.data.articles);
      });
  },
};

const store = new Vuex.Store({
  State,
  getters,
  mutations,
  actions,
});
export default store;
