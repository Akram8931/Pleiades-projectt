<template>
  <div class="sankey-chart">
    <div class="container">
  
      <div class="loading" v-if="!loading">
        Loading...
      </div>
  
      <div v-else>
        <div id="sankey_basic"></div>
        {{changeData}}
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
      }
    },
    watch: {
      // '$route': 'drawSankeyChart'
      '$route' (to, from) {
        this.$store.commit('activeChartData', to.params.name)
        this.drawSankeyChart();
        
      },
      dataLoaded(){
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

        google.setOnLoadCallback(drawChart);

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
            sankey: {
              node: {
                interactivity: true,
                width: 10
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
              self.$store.commit("getSelectedNode", sel[0].name);
              chart.clearChart();
              drawChart();
            }
          });
        }
      }
    }
  };
</script>

<style scoped>
  
</style>
