<template>
  <div>
    <div class="form-element">
      <label for="title">
        <span class="form-label">
          Title
        </span>
        <input id="title" v-model.trim="show.title" class="form-input" type="text">
      </label>
    </div>

    <div class="form-element">
      <label for="season">
        <span class="form-label">
          Season
        </span>
        <input id="season" v-model.trim="show.season" class="form-input" type="number">
      </label>
    </div>

    <div class="form-element">
      <label for="published_year">
        <span class="form-label">
          Release date
        </span>
        <input id="published_year" v-model.trim="show.published_year" class="form-input" type="number">
      </label>
    </div>

    <div class="form-element">
      <SelectYear :item="show" :type="'Show'"></SelectYear>
    </div>

    <div class="form-element">
      <label for="redo">
        <input id="redo" v-model.trim="show.redo" class="form-input form-input-inline" type="checkbox">
        <span class="form-label form-label-inline">
          This was a re-watch!
        </span>
      </label>
    </div>

    <div class="form-element">
      <button type="submit">
        Save
      </button>
    </div>

    <div v-if="errors">
      <div v-for="error of errors" :key="error.index" class="errors">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import SelectYear from './SelectYear';

export default {
  name: 'ShowForm',
  components: { SelectYear },
  props: {
    show: Object,
    errors: Array,
  },
};
</script>
