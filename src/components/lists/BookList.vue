<template>
  <section class="book-list">
    <h1>Books</h1>
    <ol v-if="allBooks">
      <li v-for="book in allBooks" :key="book._id">
        <span :class="$style.author">{{ book.author }}</span>,
        <span :class="$style.title">{{ book.title }}</span>

        <span v-if="book.redo" :class="$style.redo">reread</span>

        <div v-if="isLoggedIn" class="edit-item">
          <RouterLink :to="{ name: 'EditBook', params: { id: book._id} }">Edit</RouterLink>
          <button  @click.stop="deleteBook(book)">Delete</button>
        </div>
      </li>
    </ol>
    <div class="total" v-if="allBooks.length > 0">
      Total: {{ amountOfBooks }}
    </div>
    <div class="total" v-else>
      No books logged this year.
    </div>
  </section>
</template>

<script>
import { confirmDialog } from '../../utils/helpers';
import { deleteItem } from '../../utils/crudActions';

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
      confirmDialog('Do you really want to delete this book?')
        .then(() => deleteItem('books', book._id, this.$router))
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

  .redo {
    font-size: 8px;
    text-transform: uppercase;
    font-weight: 500;
    background: #352f6a;
    color: white;
    border-radius: 12px;
    padding: 3px 5px;
    opacity: .5;
    margin-left: 5px;
    vertical-align: middle;
  }

  .editItem {
    line-height: 1;
  }

</style>
