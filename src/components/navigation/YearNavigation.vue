<template>
  <nav class="years">
    <ul>
      <li v-for="i in getRange()" :key="i">
        <RouterLink :to="{ name: 'Year', params: { year: i } }">
          {{ i }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getCurrentYear, range } from '../../utils/helpers';

export default {
  name: 'YearNavigation',
  methods: {
    getRange() {
      return range(2007, getCurrentYear());
    },
  },
};
</script>

<style lang="scss">
.years {
  background-color: #fff;
  padding: 10px;
  font-family: "Work Sans", sans-serif;
  border-bottom: 1px solid #dfdfdf;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 10px;
    }
  }
}
</style>
