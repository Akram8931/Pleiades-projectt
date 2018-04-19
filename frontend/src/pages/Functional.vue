<template>
    <div class="cross-org">

        <ChartSankey v-if="functionalChartData.length !== 0" :dataChart="functionalChartData"></ChartSankey>
        <div class="lds-css ng-scope" v-else>
<div class="lds-spin" style="100%;height:100%">
  <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
        </div>
        <!-- <h1 v-else>Chart Loading ..... </h1> -->
    </div>
</template>

<script>
import ChartSankey from "@/components/ChartSankey";

export default {
  name: "Functional",
  computed: {
    functionalChartData() {
      return this.$store.state.functionalChartData;
    }
  },
  components: {
    ChartSankey
  },
  created() {
    this.$store.dispatch("initfunctionalChart");
  }
};
</script>

<style scoped>

</style>
