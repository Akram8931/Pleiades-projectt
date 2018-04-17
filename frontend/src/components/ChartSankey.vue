<template>
  <div class="sankey-chart">
    <div class="container">
  
      <div class="loading" v-if="!loading">
        Loading...
      </div>
  
      <div v-else>
        <button v-if="viewButton" class="btn btn-primary">Back</button>
        <div id="sankey_basic"></div>
        <!-- {{changeData}} -->
      </div>
  
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChartSankey",
    props: ["dataChart"],
    data() {
      return {
        loading: false,
        viewButton: false
      }
    },
    watch: {
      // '$route': 'drawSankeyChart'
      '$route' (to, from) {
        this.$store.commit('activeChartData', to.params.name)
        this.drawSankeyChart();
  
      },
      dataLoaded() {
        this.$store.commit('activeChartData', this.$route.params.name)
        this.drawSankeyChart();
  
      }
    },
    computed: {
      changeData() {
        return this.$store.state.selectedNode;
      },
      dataLoaded() {
        return this.$store.state.functionalChartData;
      }
    },
    methods: {
      drawSankeyChart() {
  
        this.loading = true;
  
        const self = this;
  
        //google.setOnLoadCallback(drawChart);
        drawChart()
        console.log("lets go")
  
        function drawChart() {
          console.log("drawwwwwwwwwwww me opa")
  
          let data = new google.visualization.DataTable();
  
          data.addColumn("string", "From");
          data.addColumn("string", "To");
          data.addColumn("number", "Weight");
  
          data.addRows(self.$store.state.selectedNode);
  
          // Sets chart options.
          let options = {
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
                }
  
              }
            }
          };
  
          // Instantiates and draws our chart, passing in some options.
          let chart = new google.visualization.Sankey(
            document.getElementById("sankey_basic")
          );
  
          chart.draw(data, options);
  
          window.google.visualization.events.addListener(chart, "select", () => {
            let sel = chart.getSelection();
  
            if (sel.length) {
              self.viewButton = true;
              self.$store.commit("getSelectedNode", sel[0].name);
              chart.clearChart();
              drawChart();
            }
          });
        }
      }
    },
    created() {
      this.$store.dispatch("initChart");
    }
  };
</script>

<style scoped>
  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    float: left;
  }
  svg{
    padding-top: 50px !important;
  }
</style>
