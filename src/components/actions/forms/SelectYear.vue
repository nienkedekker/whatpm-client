<template>
  <span>
    <label for="belongs_to_year">
      <span class="form-label">
        What year does this {{ type }} belong to?
      </span>
      <select id="belongs_to_year" v-model.trim="item.belongs_to_year">
        <option selected="selected" :value="currentYear">{{ currentYear }}</option>
        <option v-for="i in getRange" :key="i">
          {{ i }}
        </option>
      </select>
    </label>
  </span>
</template>

<script>
import { range, getCurrentYear } from '../../../utils/helpers';

export default {
  name: 'SelectYear',
  props: {
    item: Object,
    type: String,
  },
  computed: {
    currentYear() {
      return getCurrentYear();
    },
    getRange() {
      return range(2007, getCurrentYear() - 1);
    },
  },
};
</script>
<style lang="scss" scoped>
  .form-label {
    display: block;
  }
</style>
