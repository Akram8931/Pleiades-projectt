<template>
  <div class="sankey-chart">
    <div class="container">

      <div class="loading" v-if="!loading">
        Loading...
      </div>

      <div v-else>
        <button v-if="viewButton" class="btn btn-primary" @click.prevent="reDrawMainChart">Back</button>
        <div id="sankey_basic"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartSankey',
  props: ['dataChart'],
  data() {
    return {
      loading: false,
      viewButton: false,
    };
  },
  watch: {
    $route(to, from) {
      this.$store.commit('activeChartData', to.params.name);
      this.drawSankeyChart();
    },
    dataLoaded() {
      this.$store.commit('activeChartData', this.$route.params.name);
      this.drawSankeyChart();
    },
  },
  computed: {
    changeData() {
      return this.$store.state.selectedNode;
    },
    dataLoaded() {
      return this.$store.state.functionalChartData;
    },
  },
  methods: {
    drawSankeyChart() {
      this.loading = true;

      const self = this;

      // google.setOnLoadCallback(drawChart);

      drawChart();

      function drawChart() {
        const data = new google.visualization.DataTable();

        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');

        data.addRows(self.$store.state.selectedNode);

        // Sets chart options.
        const options = {
          width: 1200,
          height: 1500,
          sankey: {
            node: {
              interactivity: true,
              width: 20,
              labelPadding: 20,
              nodePadding: 50,
              label: {
                fontSize: 20,
                bold: true,
              },

            },
          },
        };

          // Instantiates and draws our chart, passing in some options.
        const chart = new google.visualization.Sankey(
          document.getElementById('sankey_basic'),
        );

        chart.draw(data, options);

        window.google.visualization.events.addListener(chart, 'select', () => {
          const sel = chart.getSelection();

          if (sel.length) {
            self.viewButton = true;
            self.$store.commit('getSelectedNode', sel[0].name);
            chart.clearChart();
            drawChart();
          }
        });
      }
    },
    reDrawMainChart() {
      this.viewButton = false;
      console.log('click');
      this.$store.commit('reDrawMainChart');
      this.drawSankeyChart();
    },
  },
  created() {
    this.$store.dispatch('initChart');
    this.drawSankeyChart();
  },
};
</script>

<style scoped>
.sankey-chart{
  text-align: left;
}
  .btn-primary {
    color: #007bff;
    background-color: #fff;
    border-color: #fff;
    border-radius: 5px;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 30px;
  }

  svg {
    padding-top: 50px !important;
  }
</style>
