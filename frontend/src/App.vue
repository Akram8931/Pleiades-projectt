<template>
  <div id="app">
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
  created() {
      this.$store.dispatch("initChart");
  }
};
</script>

<style>

</style>
