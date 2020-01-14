<template>
  <section class="content">
    <h2 class="pageHeader">{{ currentYear }} 🎉 </h2>
    <item-list :year-selection="currentYear"/>
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
