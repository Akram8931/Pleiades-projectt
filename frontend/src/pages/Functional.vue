<template>
    <div class="cross-org">

        <ChartSankey v-if="functionalChartData.length !== 0" :dataChart="functionalChartData"></ChartSankey>
        <h1 v-else>Chart Loading ..... </h1>
    </div>
</template>

<script>
import ChartSankey from '@/components/ChartSankey';

export default {
  name: 'Functional',
  computed: {
    functionalChartData() {
      return this.$store.state.functionalChartData;
    },
  },
  components: {
    ChartSankey,
  },
  created() {
    this.$store.dispatch('initfunctionalChart');
  },
};
</script>

<style scoped>

</style>
