<template>
  <div class="content">
    <h1>Stats</h1>
    <p>To do:</p>
    <ul>
      <li>Progress this year</li>
      <ul>
        <li>Get current year</li>
        <li>Retrieve count of items logged this year</li>
        <li>One bar chart for each item (3 total)s</li>
      </ul>
      <li>Totals all time: books:{{ booksCount }} movies:{{ moviesCount }} shows:{{ showsCount }}</li>
      <li>Logging behavior: which year did I not log or log the most?</li>
    </ul>
  </div>
</template>

<script>
import { statsActions } from '../../utils/statsActions';

export default {
  name: 'Stats',
  components: {
  },
  data() {
    return {
      errors: [],
      booksCount: 0,
      moviesCount: 0,
      showsCount: 0,
    };
  },
  created() {
    this.fetchBooks();
    this.fetchMovies();
    this.fetchShows();
  },
  methods: {
    fetchBooks() {
      statsActions
        .fetchCountOfGivenItem('books')
        .then(response => (this.booksCount = response))
        .catch(error => console.log(error));
    },
    fetchMovies() {
      statsActions
        .fetchCountOfGivenItem('movies')
        .then(response => (this.moviesCount = response))
        .catch(error => console.log(error));
    },
    fetchShows() {
      statsActions
        .fetchCountOfGivenItem('shows')
        .then(response => (this.showsCount = response))
        .catch(error => console.log(error));
    },
  },
};

</script>
