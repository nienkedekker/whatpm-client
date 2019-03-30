<template>
  <section class="content">
    <div class="form-container">
      <h2>Search 🕵️‍♀️</h2>
      <div :class="$style.searchRow">
        <div class="form-element" :class="$style.searchInputContainer">
          <p>Start searching by typing..</p>
          <label for="search">
            <input id="search" v-model="query" type="text" placeholder="Start typing!" aria-label="Title" class="form-input form-input-inline" :class="$style.searchInput">
          </label>
        </div>
      </div>

      <div class="search-results">
        <div v-if="hasResults && query !== ''">
          <p>Your search for <strong>{{ query }}</strong> returned {{ amountOfResults }} results:</p>
          <div v-if="bookResults.length > 0">
            <b>Books</b><br>
            <div v-for="book in bookResults" :key="book._id">
              <a :href="`year/${book.belongs_to_year}`">{{ book.title }} by {{ book.author}} ({{ book.belongs_to_year }})</a>
            </div>
          </div>
          <div v-if="movieResults.length > 0">
            <b>Movies</b><br>
            <div v-for="movie in movieResults" :key="movie._id">
              <a :href="`year/${movie.belongs_to_year}`">{{ movie.title }} by {{ movie.director}} ({{ movie.belongs_to_year }})</a>
            </div>
          </div>
          <div v-if="tvShowResults.length > 0">
            <b>TV Shows</b><br>
            <div v-for="show in tvShowResults" :key="show._id">
              <a :href="`year/${show.belongs_to_year}`">{{ show.title }}, season {{ show.season}} ({{ show.belongs_to_year }})</a>
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
      bookResults: [],
      movieResults: [],
      tvShowResults: [],
    };
  },
  methods: {
    searchItems() {
      search
        .searchByQuery(this.query)
        .then((response) => {
          this.searchResults = response;
          this.showNoResultsMessage = response.length <= 0;
          this.filterItemsByType(response);
        })
        .catch(error => console.log(error));
    },
    filterItemsByType() {
      const results = this.searchResults;
      Array.from(results).forEach((item) => {
        switch (item.itemtype) {
          case 'Book':
            this.bookResults.push(item);
            break;
          case 'Movie':
            this.movieResults.push(item);
            break;
          case 'Show':
            this.tvShowResults.push(item);
            break;
        }
      });
    },
  },
  watch: {
    query: {
      handler: debounce(function () {
        this.bookResults = [];
        this.movieResults = [];
        this.tvShowResults = [];
        this.searchItems();
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
