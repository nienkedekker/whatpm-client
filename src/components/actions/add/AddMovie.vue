<template>
  <section class="form-container">
    <h2>Add Movie</h2>
    <form v-if="isLoggedIn" @submit="addMovie">
      <MovieForm :movie="movie" :errors="errors"></MovieForm>
    </form>
  </section>
</template>

<script>
import MovieForm from '../forms/MovieForm';
import { actions } from '../../../utils/crudActions';

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
      actions
        .createItem('movies', this.movie, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
