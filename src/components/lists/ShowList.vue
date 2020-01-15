<template>
  <section class="tvshow-list">
    <h1>TV Shows</h1>
    <ol v-if="allShows">
      <li v-for="show in allShows" :key="show._id">
        <span :class="$style.title">{{ show.title }}</span>
        <span :class="$style.separator">&nbsp;</span>
        <span :class="$style.season">(season {{ show.season }})</span>
        <span v-if="show.redo" :class="$style.redo">rewatch</span>
        <div v-if="isLoggedIn" class="edit-item">
          <RouterLink :to="{ name: 'EditShow', params: { id: show._id} }">Edit</RouterLink>
          <button @click.stop="deleteShow(show)">Delete</button>
        </div>
      </li>
    </ol>
    <div class="total" v-if="allShows.length > 0">
      Total: {{ amountOfShows }}
    </div>
    <div class="total" v-else>
      No shows logged this year.
    </div>
  </section>
</template>

<script>
import { deleteItem } from '../../utils/crudActions';
import { confirmDialog } from '../../utils/helpers';

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
      confirmDialog('Do you really want to delete this show?')
        .then(() => deleteItem('shows', show._id, this.$router))
        .catch((message) => {
          this.$sentry.captureMessage(`Did not delete show: ${message}`);
        });
    },
  },
};
</script>
<style lang="scss" module>
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
    margin-left: 5px;
    opacity: .5;
    vertical-align: middle;
  }
</style>
