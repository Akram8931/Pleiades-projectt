<template>
    <div class="cross-org">
        
        <ChartSankey v-if="crossOrgChartData.length !== 0" :dataChart="crossOrgChartData"></ChartSankey>
        <h1 v-else>Chart Loading ..... </h1>
    </div>
</template>

<script>
    import ChartSankey from '@/components/ChartSankey';
    export default {
        name: 'CrossOrg',
        computed:{
            crossOrgChartData(){
                return this.$store.state.crossOrgChartData
            }
        },
        components: {
            ChartSankey
        },
        created() {
            this.$store.dispatch('initCrossOrgChart')
        }
    }
</script>

<style scoped>
    
</style>