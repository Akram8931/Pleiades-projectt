<template>
<div>
<div id="visualization" style="margin: 1em"> </div>
  <div>
      <b-modal v-model="$store.state.modalShow" title="State Pie Chart">
      <div class="d-block text-center">
      <div class="col-xs-4">
        <vue-chart chart-type="PieChart" :columns="$store.state.PieColumns" :rows="$store.state.PieGenderRows" :options="$store.state.PieGenderOptions"></vue-chart>
      </div>
        <div class="col-xs-4">
<vue-chart chart-type="PieChart" :columns="$store.state.PieColumns" :rows="$store.state.PieAgeRows" :options="$store.state.PieAgeOptions"></vue-chart>
      </div>
<div class="col-xs-4">
<vue-chart chart-type="PieChart" :columns="$store.state.PieColumns" :rows="$store.state.PieRaceRows" :options="$store.state.PieRaceOptions"></vue-chart>
      </div>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block>Close Me</b-btn>
    </b-modal>
  </div>

</div>
</template>

<script>
export default {
  name: 'Demographic',
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('loadUSAMap');
  },
    methods: {

  }

};
</script>

<style scoped>
</style>

