<template>
  <section class="movie-list">
    <h1>Movies</h1>
    <ol v-if="allMovies">
      <li v-for="movie in allMovies" :key="movie._id">
        <span :class="$style.title">{{ movie.title }}</span>
        (<span :class="$style.director">{{ movie.director }}, {{ movie.published_year }}</span>)
        <span v-if="movie.redo" :class="$style.redo">rewatch</span>

        <div v-if="isLoggedIn" class="edit-item">
          <RouterLink :to="{ name: 'EditMovie', params: { id: movie._id} }">Edit</RouterLink>
          <button @click.stop="deleteMovie(movie)">Delete</button>
        </div>
      </li>
    </ol>
    <div class="total" v-if="allMovies.length > 0">
      Total: {{ amountOfMovies }}
    </div>
    <div class="total" v-else>
      No movies logged this year.
    </div>
  </section>
</template>

<script>
import { confirmDialog } from '../../utils/helpers';
import { deleteItem } from '../../utils/crudActions';

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
      confirmDialog('Do you really want to delete this movie?')
        .then(() => deleteItem('movies', movie._id, this.$router))
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

.redo {
  font-size: 8px;
  text-transform: uppercase;
  font-weight: 500;
  background: #352f6a;
  color: white;
  border-radius: 12px;
  padding: 3px 5px;
  opacity: .5;
  vertical-align: middle;
}
</style>
