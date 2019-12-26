<template>
  <section class="form-container">
    <h2>Add Book</h2>
    <form v-if="isLoggedIn" @submit="addBook">
      <book-form :book="book" :errors="errors"/>
    </form>
  </section>
</template>

<script>
import { createItem } from '../../../utils/crudActions';
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
      createItem('books', this.book, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
