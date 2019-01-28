<template>
  <section class="book-list">
    <h1>Books</h1>
    <ol v-if="allBooks">
      <li v-for="book in allBooks" :key="book._id">
        <span :class="$style.author">{{ book.author }}</span>,
        <span :class="$style.title">{{ book.title }}</span><span v-if="book.redo" class="redo">*</span>

        <div v-if="isLoggedIn" class="edit-item">
          <RouterLink :to="{ name: 'EditBook', params: { id: book._id} }">Edit</RouterLink>
          <button @click.stop="deleteBook(book)">Delete</button>
        </div>
      </li>
    </ol>
    <div class="total">
      Total: {{ amountOfBooks }}
    </div>
  </section>
</template>

<script>
import { actions } from '../../utils/crudActions';
import { helpers } from '../../utils/helpers';

export default {
  name: 'BookList',
  props: {
    isLoggedIn: Boolean,
    allBooks: {
      type: Array,
      default: () => [],
    },
    amountOfBooks: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    deleteBook(book) {
      helpers.confirmDialog('Do you really want to delete this book?')
        .then(() => actions.deleteItem('books', book._id, this.$router))
        .catch(() => console.log('did not delete!'));
    },
  },
};
</script>

<style lang="scss" module>
  .author {
    color: #505050;
  }

  .title {
    color: #352f6a;
  }
</style>
