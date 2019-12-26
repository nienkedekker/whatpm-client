<template>
  <section class="content">
    <div class="form-container">
      <h2>🕵️‍♀️ Search️</h2>
        <div class="form-element" :class="$style.searchInputContainer">
          <p>Start searching by typing in the form!</p>
          <label for="search">
            <input id="search" v-model="query" type="text" placeholder="Start typing.." aria-label="search" class="form-input">
          </label>
      </div>
    </div>
    <div>
      <div :class="$style.searchResultsContainer">
        <div v-if="hasResults && query !== ''" :class="$style.results">
          <p>Your search for <strong>{{ query }}</strong> returned {{ amountOfResults }} results:</p>
          <div v-if="bookResults.length > 0" :class="$style.books">
            <h2>📖 Books</h2>
            <div v-for="book in bookResults" :key="book._id">
              <a :href="`year/${book.belongs_to_year}`">{{ book.title }} by {{ book.author}} ({{ book.belongs_to_year }})</a>
            </div>
          </div>
          <div v-if="movieResults.length > 0" :class="$style.movies">
            <h2>🎬 Movies</h2>
            <div v-for="movie in movieResults" :key="movie._id">
              <a :href="`year/${movie.belongs_to_year}`">{{ movie.title }} by {{ movie.director}} ({{ movie.belongs_to_year }})</a>
            </div>
          </div>
          <div v-if="tvShowResults.length > 0" :class="$style.shows">
            <h2>📺 TV Shows</h2>
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
          default:
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
  @import '../../assets/css/variables';

  label {
    margin-bottom: 1em;
  }

  .searchForm {
    width: 100%;
  }

  .searchResultsContainer {
    margin: 1em auto;
    line-height: 2em;
    @media (min-width: $mq-tablet) {
      width: 50%;
    }
  }

  .results {
    padding: 20px;

    h2 {
      margin: 0 0 10px;
      border-bottom: 1px solid #bbbbbb;
    }
  }

  .books, .movies, .shows {
    margin: 20px 0 20px 0;
    padding: 20px 0 20px 0;
  }
</style>
