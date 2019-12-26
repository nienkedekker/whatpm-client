<template>
  <section class="content">
    <section class="form-container">
      <h2>Edit Book</h2>
      <form v-if="isLoggedIn" @submit="editBook">
        <book-form :book="book" :errors="errors"/>
      </form>
    </section>
  </section>
</template>

<script>
import { fetchSingleItemById, updateItem } from '../../../utils/crudActions';
import BookForm from '../forms/BookForm';

export default {
  name: 'EditBook',
  components: { BookForm },
  data() {
    return {
      errors: [],
      book: {},
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    fetchSingleItemById('books', this.$route.params.id)
      .then((response) => { this.book = response; })
      .catch(error => console.log(error));
  },
  methods: {
    editBook(event) {
      event.preventDefault();
      updateItem('books', this.$route.params.id, this.book, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
