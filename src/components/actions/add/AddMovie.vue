<template>
  <section class="form-container">
    <h2>Add Movie</h2>
    <form v-if="isLoggedIn" @submit="addMovie">
      <movie-form :movie="movie" :errors="errors"/>
    </form>
  </section>
</template>

<script>
import MovieForm from '../forms/MovieForm';
import { createItem } from '../../../utils/crudActions';

export default {
  name: 'AddMovie',
  components: { MovieForm },
  data() {
    return {
      movie: {},
      errors: [],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    addMovie(evt) {
      evt.preventDefault();
      createItem('movies', this.movie, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
