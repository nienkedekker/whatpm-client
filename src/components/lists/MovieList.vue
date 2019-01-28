<template>
  <section class="movie-list">
    <h1>Movies</h1>
    <ol v-if="allMovies">
      <li v-for="movie in allMovies" :key="movie._id">
        <span :class="$style.title">{{ movie.title }}</span>
        (<span :class="$style.director">{{ movie.director }}, {{ movie.published_year }}</span>)
        <span v-if="movie.redo">*</span>

        <div v-if="isLoggedIn" class="edit-item">
          <RouterLink :to="{ name: 'EditMovie', params: { id: movie._id} }">Edit</RouterLink>
          <button @click.stop="deleteMovie(movie)">Delete</button>
        </div>
      </li>
    </ol>
    <div class="total">
      Total: {{ amountOfMovies }}
    </div>
  </section>
</template>

<script>
import { actions } from '../../utils/crudActions';
import { helpers } from '../../utils/helpers';

export default {
  name: 'MovieList',
  props: {
    isLoggedIn: Boolean,
    allMovies: {
      type: Array,
      default: () => [],
    },
    amountOfMovies: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    deleteMovie(movie) {
      helpers.confirmDialog('Do you really want to delete this movie?')
        .then(() => actions.deleteItem('movies', movie._id, this.$router))
        .catch(() => console.log('did not delete!'));
    },
  },
};
</script>
<style lang="scss" module>
.title {
  color: #352f6a;
}

.director {
  color: #505050;
}
</style>
