<template>
  <section class="search">
    <div class="search-box">
      <input v-model="query" type="text" placeholder="Title of item" aria-label="Title">
      <button @click="searchItemsByTitle" type="button">Search</button>
    </div>
    <div class="search-results">
      <div v-if="hasResults">
        <ul>
        <li v-for="result in searchResults" :key="result._id">
          {{ result.title }}
        </li>
        </ul>
      </div>
      <div v-if="noResultsFound">
        No results for {{ query }}
      </div>
    </div>
  </section>
</template>

<script>
import { search } from '../../utils/search';

export default {
  name: 'Search',
  data() {
    return {
      query: '',
      searchResults: [],
      showNoResultsMessage: false,
    };
  },
  methods: {
    searchItemsByTitle() {
      search
        .searchByTitle(this.query)
        .then((response) => {
          this.searchResults = response;
          this.showNoResultsMessage = response.length <= 0;
        })
        .catch(error => this.errors.push(error.message));
    },
  },
  computed: {
    hasResults() {
      return this.searchResults.length > 0;
    },
    noResultsFound() {
      return this.showNoResultsMessage && this.query;
    },
  },
};
</script>

<style scoped>

</style>
