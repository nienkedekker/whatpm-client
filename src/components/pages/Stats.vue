<template>
  <div class="content">
    <h1>⚠️ ️Stats (WIP) ⚠️</h1>
    <p>To do:️</p>
    <p>Progress this year (bar chart), {{ currentYear }}:</p>
    <ul>
      <li>Books: {{ allItemsInCurrentYear.books }}</li>
      <li>Movies: {{ allItemsInCurrentYear.movies  }}</li>
      <li>Shows (seasons, really): {{ allItemsInCurrentYear.shows}}</li>
    </ul>
    <p>Progress last year (bar chart), {{ lastYear }}:</p>
    <ul>
      <li>Books: {{ allItemsFromLastYear.books }}</li>
      <li>Movies: {{ allItemsFromLastYear.movies  }}</li>
      <li>Shows (seasons, really): {{ allItemsFromLastYear.shows}}</li>
    </ul>
    <p>Totals all time (pie chart):</p>
    <ul>
      <li>Books: {{ allItems.books }}</li>
      <li>Movies: {{ allItems.movies  }}</li>
      <li>Shows (seasons, really): {{ allItems.shows}}</li>
    </ul>
    <h2>Items in current year</h2>
    <items-in-current-year/>
  </div>
</template>

<script>
import { fetchAllItemsByYear, fetchAllTimeItems } from '../../utils/statsActions';
import { getCurrentYear } from '../../utils/helpers';
import ItemsInCurrentYear from './Charts/ItemsInCurrentYear';

export default {
  name: 'Stats',
  components: { ItemsInCurrentYear },
  data() {
    return {
      errors: [],
      allItems: [],
      allItemsInCurrentYear: [],
      labelsYear: [2011, 2012],
      allItemsFromLastYear: [],
      currentYear: getCurrentYear(),
      lastYear: (getCurrentYear() - 1),
    };
  },
  created() {
    this.getAllItems();
    this.getAllItemsInCurrentYear();
    this.getAllItemsFromLastYear();
  },
  methods: {
    getAllItems() {
      fetchAllTimeItems()
        .then(response => this.allItems = response)
        .catch((error) => {
          console.log(error);
        });
    },
    getAllItemsInCurrentYear() {
      fetchAllItemsByYear(this.currentYear)
        .then(response => this.allItemsInCurrentYear = response)
        .catch((error) => {
          console.log(error);
        });
    },
    getAllItemsFromLastYear() {
      fetchAllItemsByYear(this.lastYear)
        .then(response => this.allItemsFromLastYear = response)
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>
