<template>
  <div class="sankey-chart">
      <button v-if="viewButton" class="btn btn-main" @click.prevent="reDrawMainChart">Back</button>
      <div id="sankey_basic"></div>  
  </div>
</template>

<script>
  export default {
    name: 'ChartSankey',
    props: ['dataChart'],
    data() {
      return {
        viewButton: false,
        selectedData: []
      };
    },
    watch: {
      $route(to, from) {
        this.selectedData = this.dataChart
        this.viewButton = false;          
        this.drawSankeyChart();
      },
      selectedData(){
        this.drawSankeyChart();
      }
    },
    methods: {
      drawSankeyChart() {
  
        this.loading = true;
  
        const self = this;
        window.google.charts.load('current', {
          packages: ['sankey']
        });
        window.google.charts.setOnLoadCallback(() => drawChart());
  
        // drawChart()
  
        function drawChart() {
  
          const data = new window.google.visualization.DataTable();
  
          data.addColumn('string', 'Home location');
          data.addColumn('string', 'To');
          data.addColumn('number', 'No of Employess');
  
          data.addRows(self.selectedData);
  
  
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
                  color: '#fff',
                },
  
              },
            },
          };
  
          // Instantiates and draws our chart, passing in some options.
          const chart = new window.google.visualization.Sankey(
            document.getElementById('sankey_basic'),
          );
  
          chart.draw(data, options);
  
          window.google.visualization.events.addListener(chart, 'select', () => {
                const sel = chart.getSelection();
  
                if (sel.length) {
                  self.viewButton = true;

                  self.selectedData = _.filter(self.dataChart, (o) => {
                      if (o.indexOf(sel[0].name) > -1) {
                        return o;
                      }
                  });
                      
                  chart.clearChart();
                  drawChart();
                      
                }
          });
        }
      },
      reDrawMainChart() {
        this.viewButton = false;
        this.selectedData = this.dataChart
        this.drawSankeyChart();
      },
      },
      mounted(){
        this.selectedData = this.dataChart
      },
      created() {
        this.selectedData = this.dataChart
        this.drawSankeyChart();
      },
      updated(){
        this.drawSankeyChart();
      }
      };
</script>

<style scoped>
  .sankey-chart {
    text-align: left;
  }
  
  .btn-main {
    color: #468b9a;
    background-color: #fff;
    border-color: #fff;
    border-radius: 5px;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 30px;
  }
  
  .btn-main:hover {
    color: #fff;
    background-color: #000;
    border-color: #000;
  }
  
  svg {
    padding-top: 50px !important;
  }
</style>
