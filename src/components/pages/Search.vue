<template>
  <section class="content">
    <div class="form-container">
      <h2>Search 🕵️‍♀️</h2>
      <div :class="$style.searchRow">
        <div class="form-element" :class="$style.searchInputContainer">
          <label for="search">
            <input id="search" v-model="query" type="text" placeholder="Title of item" aria-label="Title" class="form-input form-input-inline" :class="$style.searchInput">
          </label>
        </div>

        <div class="form-element" :class="$style.searchButtonContainer">
          <button @click="searchItemsByTitle" type="button" :class="$style.searchButton">Search</button>
        </div>
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

<style lang="scss" module>
  .searchRow {
    display: flex;
  }

  .searchInputContainer {
    width: 65%;
  }

  .searchButtonContainer {
    width: 30%;
  }

</style>
