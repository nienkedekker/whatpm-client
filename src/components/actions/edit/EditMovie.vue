<template>
  <section class="content">
    <section class="form-container">
      <h2>Edit Movie</h2>
      <form v-if="isLoggedIn" @submit="editMovie">
        <MovieForm :movie="movie" :errors="errors"></MovieForm>
      </form>
    </section>
  </section>
</template>

<script>
import { actions } from '../../../utils/crudActions';
import MovieForm from '../forms/MovieForm';

export default {
  name: 'EditMovie',
  components: { MovieForm },
  mixin: [actions],
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
    actions
      .fetchSingleItemById('movies', this.$route.params.id)
      .then(response => (this.movie = response))
      .catch(error => console.log(error));
  },
  methods: {
    editMovie(event) {
      event.preventDefault();
      actions
        .updateItem('movies', this.$route.params.id, this.movie, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
