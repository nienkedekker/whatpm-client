<template>
  <section class="content">
    <h1>{{ currentYear }} 🎉 </h1>
    <ItemList :year-selection="currentYear"></ItemList>
  </section>
</template>

<script>
import { getCurrentYear } from '../../utils/helpers';
import ItemList from '../lists/ItemList';

export default {
  name: 'Index',
  components: {
    ItemList,
  },
  data() {
    return {
      currentYear: getCurrentYear(),
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>
<style lang="scss" scoped>
.current-year {
  font-size: 2em;
  padding: 20px 20px 0 20px;
}
</style>
