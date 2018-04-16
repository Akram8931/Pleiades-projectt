<template>
  <div class="sankey-chart">
  
    <div id="sankey_basic"></div>
    
  </div>
</template>

<script>
  export default {
    name: "ChartSankey",
    computed: {
      changeData() {
        this.drawSankeyChart();
        return this.$store.state.selectedNode;
      }
  
    },

    methods: {
  
      drawSankeyChart() {
        const self = this;
        google.setOnLoadCallback(drawChart);
  
  
        function drawChart() {
        
          
          let data = new google.visualization.DataTable();
  
          data.addColumn("string", "From");
          data.addColumn("string", "To");
          data.addColumn("number", "Weight");
  
          data.addRows(self.$store.state.selectedNode);
  
          // Sets chart options.
          let options = {
            width: 600,
            sankey: {
              node: {
                interactivity: true
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
  
              self.$store.commit('getSelectedNode', sel[0].name)
              chart.clearChart();
              drawChart();

            }
          });
        }
      }
  
    },
    created() {
  
      this.$store.dispatch('initChart');
      this.drawSankeyChart();
  
    }
  };
</script>

<style scoped>
  
</style>
