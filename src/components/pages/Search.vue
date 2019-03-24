<template>
  <section class="content">
    <div class="form-container">
      <h2>Search 🕵️‍♀️</h2>
      <div :class="$style.searchRow">
        <div class="form-element" :class="$style.searchInputContainer">
          <p>Start searching by typing your query! WIP 🚧</p>
          <label for="search">
            <input id="search" v-model="query" type="text" placeholder="Start typing!" aria-label="Title" class="form-input form-input-inline" :class="$style.searchInput">
          </label>
        </div>
      </div>

      <div class="search-results">
        <div v-if="hasResults && query !== ''">
          <p>Your search for "{{ query }}" returned {{ amountOfResults }} results:</p>
          <div v-for="result in searchResults" :key="result._id">
            <div v-if="result.itemtype === 'Book'">
              {{ result.title }} -- {{ result.author }} -- read in {{ result.belongs_to_year }}
            </div>
            <div v-if="result.itemtype === 'Show'">
              {{ result.title }} -- season {{ result.season }} -- watched in {{ result.belongs_to_year }}
            </div>
            <div v-if="result.itemtype === 'Movie'">
              {{ result.title }} -- {{ result.director }} -- watched in {{ result.belongs_to_year }}
            </div>
          </div>
        </div>
        <div v-if="noResultsFound">
          No results for {{ query }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as debounce from 'lodash.debounce';
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
        .catch(error => console.log(error));
    },
  },
  watch: {
    query: {
      handler: debounce(function () {
        this.searchItemsByTitle();
      }, 250),
    },
  },
  computed: {
    hasResults() {
      return this.searchResults.length > 0;
    },
    noResultsFound() {
      return this.showNoResultsMessage && this.query;
    },
    amountOfResults() {
      return this.searchResults.length;
    },
  },
};
</script>

<style lang="scss" module>
  .searchRow {
    display: flex;
  }

  label {
    margin-bottom: 1em;
  }
  .searchInputContainer {
    /*width: 100%;*/
  }

  .searchButtonContainer {
    width: 30%;
  }

</style>
