<template>
  <div id="app">
    <ChartSankey v-if="$store.state.sankeyData" :digramData="$store.state.sankeyData"></ChartSankey>
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
