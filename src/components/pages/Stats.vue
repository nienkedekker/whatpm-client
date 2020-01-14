<template>
  <div class="content">
    <div class="charts">
      <h2 class="pageHeader">Items in {{ getCurrentYear }}</h2>
      <items-in-current-year/>
      <h2 class="pageHeader">Items in {{ getLastYear }}</h2>
      <items-last-year />
      <h2 class="pageHeader">Totals over time</h2>
      <total-items/>
    </div>
  </div>
</template>

<script>
import ItemsInCurrentYear from './charts/ItemsInCurrentYear.vue';
import ItemsLastYear from './charts/ItemsLastYear';
import TotalItems from './charts/TotalItems';
import { getCurrentYear } from '../../utils/helpers';

export default {
  name: 'Stats',
  components: { ItemsInCurrentYear, ItemsLastYear, TotalItems },
  computed: {
    getCurrentYear() {
      return getCurrentYear();
    },
    getLastYear() {
      return getCurrentYear() - 1;
    },
  },
};
</script>
<style lang="scss" scoped>
  .charts {
    margin: 0 auto;
    max-width: 800px;
  }
</style>
