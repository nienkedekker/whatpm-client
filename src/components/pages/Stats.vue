<template>
  <div class="content">
    <h1>⚠️ ️Stats (WIP) ⚠️</h1>
    <p>To do:️</p>
    <p>Progress this year (bar chart):</p>
    <ul>
      <li>Books: {{ allItemsInCurrentYear.books }}</li>
      <li>Movies: {{ allItemsInCurrentYear.movies  }}</li>
      <li>Shows (seasons, really): {{ allItemsInCurrentYear.shows}}</li>
    </ul>
    <p>Totals all time (pie chart):</p>
    <ul>
      <li>Books: {{ allItems.books }}</li>
      <li>Movies: {{ allItems.movies  }}</li>
      <li>Shows (seasons, really): {{ allItems.shows}}</li>
    </ul>
  </div>
</template>

<script>
import { statsActions } from '../../utils/statsActions';
import { helpers } from '../../utils/helpers';

export default {
  name: 'Stats',
  data() {
    return {
      errors: [],
      allItems: [],
      allItemsInCurrentYear: [],
    };
  },
  created() {
    this.getAllItems();
    this.getAllItemsInCurrentYear();
  },
  methods: {
    getAllItems() {
      statsActions.fetchAllTimeItems()
        .then(response => this.allItems = response)
        .catch((error) => {
          console.log(error);
        });
    },
    getAllItemsInCurrentYear() {
      const currentYear = helpers.getCurrentYear();
      statsActions.fetchAllItemsByYear(currentYear)
        .then(response => this.allItemsInCurrentYear = response)
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>
