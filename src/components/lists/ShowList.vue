<template>
  <section class="tvshow-list">
    <h1>TV Shows</h1>
    <ol v-if="allShows">
      <li v-for="show in allShows" :key="show._id">
        <span :class="$style.title">{{ show.title }} (season {{ show.season }})</span>
        <span v-if="show.redo" class="redo">*</span>

        <div v-if="isLoggedIn" class="edit-item">
          <RouterLink :to="{ name: 'EditShow', params: { id: show._id} }">Edit</RouterLink>
          <button @click.stop="deleteShow(show)">Delete</button>
        </div>
      </li>
    </ol>
    <div class="total">
      Total: {{ amountOfShows }}
    </div>
  </section>
</template>

<script>
import { actions } from '../../utils/crudActions';
import { helpers } from '../../utils/helpers';

export default {
  name: 'ShowList',
  props: {
    isLoggedIn: Boolean,
    allShows: {
      type: Array,
      default: () => [],
    },
    amountOfShows: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    deleteShow(show) {
      helpers.confirmDialog('Do you really want to delete this show?')
        .then(() => actions.deleteItem('shows', show._id, this.$router))
        .catch(() => console.log('did not delete!'));
    },
  },
};
</script>
<style lang="scss" module>
  .title {
    color: #505050;
  }
</style>
