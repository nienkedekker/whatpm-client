<template>
  <section class="content">
    <section class="form-container">
      <h2>Edit Movie</h2>
      <form v-if="isLoggedIn" @submit="editMovie">
        <movie-form :movie="movie" :errors="errors"/>
      </form>
    </section>
  </section>
</template>

<script>
import { fetchSingleItemById, updateItem } from '../../../utils/crudActions';
import MovieForm from '../forms/MovieForm';

export default {
  name: 'EditMovie',
  components: { MovieForm },
  data() {
    return {
      errors: [],
      movie: {},
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    fetchSingleItemById('movies', this.$route.params.id)
      .then(response => (this.movie = response))
      .catch((error) => {
        this.$sentry.captureException(new Error(`Could not fetch movie item by id: ${error}`));
      });
  },
  methods: {
    editMovie(event) {
      event.preventDefault();
      updateItem('movies', this.$route.params.id, this.movie, this.$router)
        .catch((error) => {
          this.errors.push(error.message);
          this.$sentry.captureException(new Error(`Could not edit movie: ${error.message}`));
        });
    },
  },
};
</script>
