<template>
  <div class="content">
    <h1>⚠️ ️Stats (WIP) ⚠️</h1>
    <p>To do:️</p>
    <ul>
      <li>Progress this year (bar chart)</li>
      <li>Totals all time (bar chart): </li>
      <ul>
        <li>Books: {{ booksCount }}</li>
        <li>Movies: {{ moviesCount }}</li>
        <li>Shows (seasons, really): {{ showsCount }}</li>
      </ul>
      <li>Logging behavior (line chart): which year did I not log at all, or log a lot?</li>
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
