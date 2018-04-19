<template>
<div>
<div v-if="ListOfStates.length !== 0" id="visualization" style="margin: 1em; position:absolute; top:100px; right:26%"> </div>
   <h1 v-else>Map Loading ..... </h1>
  <div>
      <b-modal v-model="$store.state.modalShow" :title="$store.state.stateName">
      <div class="d-block text-center">
        <div class="col-xs-12 text-center" style="height:200px; margin-top: 30px;">

<span class="stateface stateface-replace" :class="'stateface-' + $store.state.statePrev">{{$store.state.statePrev}}</span>
        </div>
      <div class="col-xs-4">
        <h5 class="text-center" style="padding-left: 69px;">Gender</h5>
        <vue-chart chart-type="PieChart" :columns="PieGenderColumns" :rows="$store.state.PieGenderRows" :options="PieGenderOptions"></vue-chart>
      </div>
         <div class="col-xs-4">
           <h5 class="text-center" style="padding-left: 69px;">Age</h5>
<vue-chart chart-type="PieChart" :columns="PieAgeColumns" :rows="$store.state.PieAgeRows" :options="PieAgeOptions"></vue-chart>
      </div>
<div class="col-xs-4">
  <h5 class="text-center" style="padding-left: 69px;">Race</h5>
<vue-chart chart-type="PieChart" :columns="PieRaceColumns" :rows="$store.state.PieRaceRows" :options="PieRaceOptions"></vue-chart>
      </div>

      </div>
    </b-modal>
  </div>

</div>
</template>

<script>
export default {
  name: 'Demographic',
  data() {
    return {
      PieGenderOptions: {
        title: 'GENDER',
        width: 650,
        height: 500,
        curveType: 'function',
        is3D: true,
        legend: 'none',
        pieSliceText: 'none',
        chartArea: { left: 0, top: 0, width: '100%', height: '100%' },
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
        width: 650,
        height: 500,
        curveType: 'function',
        is3D: true,
        legend: 'none',
        pieSliceText: 'none',
        chartArea: { left: 0, top: 0, width: '100%', height: '100%' },
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
        width: 650,
        height: 500,
        curveType: 'function',
        chartArea: { left: 0, top: 0, width: '100%', height: '100%' },
        is3D: true,
        legend: 'none',
        pieSliceText: 'none',
        slices: {
          0: { color: '#0c586f' },
          1: { color: 'black' },
          2: { color: '#a7b0b7' },
          3: { color: 'orange' },
        },
        backgroundColor: 'none',
      },
      PieGenderColumns: [
        {
          type: 'string',
          label: 'Gender',
        },
        {
          type: 'number',
          label: 'Percentage',
        },
      ],
      PieAgeColumns: [
        {
          type: 'string',
          label: 'Age',
        },
        {
          type: 'number',
          label: 'Percentage',
        },
      ],
      PieRaceColumns: [
        {
          type: 'string',
          label: 'Gender',
        },
        {
          type: 'number',
          label: 'Percentage',
        },
      ],
    };
  },
  computed: {
    ListOfStates() {
      return this.$store.state.USStates;
    },
  },
  watch: {
    ListOfStates() {
      this.drawVisualization();
    },
  },
  created() {
    this.$store.dispatch('loadUSAMap');
  },
  methods: {
    drawVisualization() {
      const self = this;
      window.google.charts.load('current', {
        packages: ['geochart'],
      });
      window.google.charts.setOnLoadCallback(() => drawChart());

      // drawChart()

      function drawChart() {
        const data = window.google.visualization.arrayToDataTable(
          self.$store.state.USStates,
        );
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
        window.google.visualization.events.addListener(
          geochart,
          'select',
          () => {
            const newStateName =
              self.$store.state.USStates[geochart.getSelection()[0].row + 1][0];
            self.$store.commit('changeStateName', newStateName);
            self.$store.dispatch('loadPieChart', newStateName);
          },
        );
        // }
      }
    },
  },
};
</script>

<style scoped>

</style>

