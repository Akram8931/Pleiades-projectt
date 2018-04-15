<template>
<div>
<div id="visualization" style="margin: 1em"> </div>
</div>
</template>

<script>
export default {
  name: 'Demographic',
  props:['USData'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    window.google.load('visualization', '1', { packages: ['geochart'] });
    window.google.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
      const data = window.google.visualization.arrayToDataTable(this.USData);

      const opts = {
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
      };
      const geochart = new window.google.visualization.GeoChart(
        document.getElementById('visualization'),
      );
      geochart.draw(data, opts);
    }
  },
};
</script>

<style scoped>

</style>

