<template>
  <section class="content">
    <section class="form-container">
      <h2>Edit Book</h2>
      <form v-if="isLoggedIn" @submit="editBook">
        <BookForm :book="book" :errors="errors"></BookForm>
      </form>
    </section>
  </section>
</template>

<script>
import { actions } from '../../../utils/crudActions';
import BookForm from '../forms/BookForm';

export default {
  name: 'EditBook',
  components: { BookForm },
  mixin: [actions],
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
    actions
      .fetchSingleItemById('books', this.$route.params.id)
      .then((response) => { this.book = response; })
      .catch(error => console.log(error));
  },
  methods: {
    editBook(event) {
      event.preventDefault();
      actions
        .updateItem('books', this.$route.params.id, this.book, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
