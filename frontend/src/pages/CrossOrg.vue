<template>
    <div class="cross-org">

        <ChartSankey v-if="crossOrgChartData.length !== 0" :dataChart="crossOrgChartData"></ChartSankey>
                <div class="lds-css ng-scope" v-else>
<div class="lds-spin" style="100%;height:100%">
  <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
        </div>
        <!-- <h1 v-else>Chart Loading ..... </h1> -->
    </div>
</template>

<script>
import ChartSankey from '@/components/ChartSankey';

export default {
  name: 'CrossOrg',
  computed: {
    crossOrgChartData() {
      return this.$store.state.crossOrgChartData;
    },
  },
  components: {
    ChartSankey,
  },
  created() {
    this.$store.dispatch('initCrossOrgChart');
  },
};
</script>

<style scoped>

</style>
