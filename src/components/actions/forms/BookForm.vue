<template>
  <div>
    <div class="form-element">
      <label for="title">
        <span class="form-label">
          Title
        </span>
        <input id="title" v-model.trim="book.title" class="form-input" type="text">
      </label>
    </div>

    <div class="form-element">
      <label for="author">
        <span class="form-label">
          Author
        </span>
        <input id="author" v-model.trim="book.author" class="form-input" type="text">
      </label>
    </div>

    <div class="form-element">
      <label for="published_year">
        <span class="form-label">
          Publishing date
        </span>
        <input id="published_year" v-model.trim="book.published_year" class="form-input" type="number">
      </label>
    </div>

    <div class="form-element">
      <SelectYear :item="book" :type="'book'"></SelectYear>
    </div>

    <div class="form-element">
      <label for="redo">
        <input id="redo" v-model.trim="book.redo" class="form-input form-input-inline" type="checkbox">
        <span class="form-label form-label-inline">
          This was a re-read!
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
    book: Object,
    errors: Array,
  },
};
</script>
