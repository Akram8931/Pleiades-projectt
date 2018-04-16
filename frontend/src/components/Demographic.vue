<template>
<div>
<div id="visualization" style="margin: 1em"> </div>


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

};
</script>

<style scoped>
</style>

