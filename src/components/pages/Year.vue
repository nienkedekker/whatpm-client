<template>
  <section class="content">
    <h2 class="pageHeader">🗓 {{ yearInRoute }}</h2>
    <item-list :year-selection="yearInRoute"/>
  </section>
</template>

<script>
import ItemList from '../lists/ItemList';

export default {
  name: 'Year',
  components: {
    ItemList,
  },
  data() {
    return {
      yearInRoute: this.$route.params.year,
    };
  },
  watch: {
    '$route.params.year': function (year) {
      this.yearInRoute = year;
    },
  },
};
</script>
<style lang="scss" scoped>
  .year-in-route {
    font-size: 2em;
    padding: 0px 0px 0 0px;
  }
</style>
