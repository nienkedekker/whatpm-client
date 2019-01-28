<template>
  <div>
    <div class="form-element">
      <label for="title">
        <span class="form-label">
          Title
        </span>
        <input id="title" v-model.trim="movie.title" class="form-input" type="text">
      </label>
    </div>

    <div class="form-element">
      <label for="author">
        <span class="form-label">
          Director
        </span>
        <input id="author" v-model.trim="movie.director" class="form-input" type="text">
      </label>
    </div>

    <div class="form-element">
      <label for="published_year">
        <span class="form-label">
          Release date
        </span>
        <input id="published_year" v-model.trim="movie.published_year" class="form-input" type="number">
      </label>
    </div>

    <div class="form-element">
      <SelectYear :item="movie" :type="'movie'"></SelectYear>
    </div>

    <div class="form-element">
      <label for="redo">
        <input id="redo" v-model.trim="movie.redo" class="form-input form-input-inline" type="checkbox">
        <span class="form-label form-label-inline">
          This was a rewatch!
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
  name: 'BookForm',
  components: { SelectYear },
  props: {
    movie: Object,
    errors: Array,
  },
};
</script>
