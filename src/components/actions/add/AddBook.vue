<template>
  <section class="form-container">
    <h2>Add Book</h2>
    <form v-if="isLoggedIn" @submit="addBook">
      <BookForm :book="book" :errors="errors"></BookForm>
    </form>
  </section>
</template>

<script>
import { actions } from '../../../utils/crudActions';
import BookForm from '../forms/BookForm';

export default {
  name: 'AddBook',
  components: { BookForm },
  data() {
    return {
      book: {},
      errors: [],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    addBook(evt) {
      evt.preventDefault();
      actions
        .createItem('books', this.book, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
