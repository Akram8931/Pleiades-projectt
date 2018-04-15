<template>
  <div class="sankey-chart">
    <div id="sankey_basic"></div>
  </div>
</template>

<script>
export default {
  name: "ChartSankey",
  props: [
    {
      "digramData": {
        required: true,
        type: Array
      }
    }
  ],
  data() {
    return {
      x: this.$store.state.sankeyData
    };
  },
  mounted() {
    // google.charts.load('current', {'packages':['sankey']});

    google.setOnLoadCallback(drawChart);

    function drawChart() {
      console.log("x" + typeof this.x);

      const data = new google.visualization.DataTable();
      data.addColumn("string", "From");
      data.addColumn("string", "To");
      data.addColumn("number", "Weight");
      if (this.x) data.addRows(this.x);

      // Sets chart options.
      const options = {
        width: 600,
        sankey: {
          node: {
            interactivity: true
          }
        }
      };

      // Instantiates and draws our chart, passing in some options.
      const chart = new google.visualization.Sankey(
        document.getElementById("sankey_basic")
      );
      chart.draw(data, options);
      window.google.visualization.events.addListener(chart, "select", () => {
        const sel = chart.getSelection();
        if (sel.length) {
          console.log(sel);
          // alert(`You selected node "${sel[0].name}"`);
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
