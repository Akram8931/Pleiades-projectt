<template>
  <div id="app">
    <ChartSankey></ChartSankey>
    <router-view/>
  </div>
</template>

<script>
import ChartSankey from './components/ChartSankey';

export default {
  name: 'App',
  components: {
    ChartSankey,
  },
};
</script>

<style>

</style>
