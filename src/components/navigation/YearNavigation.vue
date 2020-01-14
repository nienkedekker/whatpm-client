<template>
  <nav :class="$style.years">
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

<style lang="scss" module>
@import "../../assets/css/variables";

.years {
  background-color: $white;
  border-bottom: 1px solid $mercury-grey;
  padding: 0.625em;
  text-transform: uppercase;

  li {
    display: inline-block;
    margin: 0.625em 0;
  }

  a, a:active, a:visited, a:focus {
    padding: 0.625em;
    color: $outerspace-grey;

    &:hover {
      color: $fuchsia-blue;
    }
  }
}
</style>
