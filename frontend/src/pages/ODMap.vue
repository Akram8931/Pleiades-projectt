<template>
  <div>
     <router-link  to=""> Demographic</router-link>
<router-link  to=""> Functional Capability </router-link>
<router-link  to=""> Cross Org Capability/</router-link>
<router-view/>
      <vue-chart chart-type="GeoChart" :chart-events="chartEvents" :columns="columns" :rows="rows" :options="options"></vue-chart>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      MSG: 'message',
      chartEvents: {
        select: () => {
          debugger;
          // GeoChart.getSelection()
          // console.log( GeoChart.getSelection());
          // const StateName = this.rows[selectedItem.row][0];
          // alert(StateName);

          alert('x');
        },
        ready() {

        },
      },

      columns: [
        {
          type: 'string',
          label: 'State',
        },
        {
          type: 'number',
          label: 'No Of Employees',
        },
      ],
      rows: [
        ['Alabama', 12],
        ['Alaska', 121],
        ['Arizona', 222],
        ['Arkansas', 100],
        ['California', 120],
        ['Colorado', 140],
        ['Connecticut', 160],
        ['Delaware', 200],
        ['Florida', 239],
        ['Georgia', 234],
        ['Hawaii', 278],
        ['Idaho', 289],
        ['Illinois', 290],
        ['Indiana', 289],
        ['Iowa', 300],
        ['Kansas', 345],
        ['Kentucky', 370],
        ['Louisiana', 367],
        ['Maine', 390],
        ['Maryland', 400],
        ['Massachusetts', 420],
        ['Michigan', 450],
        ['Minnesota', 460],
        ['Mississippi', 576],
        ['Missouri', 789],
        ['Montana', 677],
        ['Nebraska', 876],
        ['Nevada', 453],
        ['New Hampshire', 674],
        ['New Jersey', 510],
        ['New Mexico', 610],
        ['New York', 345],
        ['North Carolina', 349],
        ['North Dakota', 800],
        ['Ohio', 867],
        ['Oklahoma', 590],
        ['Oregon', 865],
        ['Pennsylvania', 920],
        ['Rhode Island', 910],
        ['South Carolina', 860],
        ['South Dakota', 960],
        ['Tennessee', 7],
        ['Texas', 32],
        ['Utah', 765],
        ['Vermont', 98],
        ['Virginia', 640],
        ['Washington', 999],
        ['West Virginia', 943],
        ['Wisconsin', 45],
        ['Wyoming', 100],
      ],
      options: {
        title: 'Popularity by Countries',
        width: '100%',
        height: 500,
        region: 'US',
        displayMode: 'regions',
        colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
        backgroundColor: 'white',
        datalessRegionColor: '#eee',
        defaultColor: '#f5f5f5',
        resolution: 'provinces',
      },
    };
  },
};
</script>
