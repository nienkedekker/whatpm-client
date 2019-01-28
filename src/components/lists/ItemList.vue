<template>
  <section>
    <div v-if="errored" class="errors">
      Could not load items :(
    </div>
    <div v-if="loading" class="loading">
      Loading items..
    </div>
    <section v-else class="item-list">
      <BookList v-if="items.allBooks"
          :allBooks="items.allBooks"
          :amountOfBooks="items.allBooks.length"
          :isLoggedIn="isLoggedIn">
      </BookList>
      <MovieList v-if="items.allMovies"
          :allMovies="items.allMovies"
          :amountOfMovies="items.allMovies.length"
          :isLoggedIn="isLoggedIn">
      </MovieList>
      <ShowList v-if="items.allShows"
          :allShows="items.allShows"
          :amountOfShows="items.allShows.length"
          :isLoggedIn="isLoggedIn"
      ></ShowList>
    </section>
  </section>
</template>

<script>
import { actions } from '../../utils/crudActions';
import BookList from './BookList';
import MovieList from './MovieList';
import ShowList from './ShowList';

export default {
  name: 'ItemList',
  components: { BookList, MovieList, ShowList },
  props: {
    yearSelection: {
      type: [String, Number],
      default: 2007,
    },
  },
  data() {
    return {
      items: [],
      loading: true,
      errored: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  watch: {
    '$route.params.year': function (year) {
      this.fetchItems(year);
    },
  },
  created() {
    this.fetchItems(this.yearSelection);
  },
  methods: {
    fetchItems(chosenYear) {
      actions.fetchAllItemsByYear(chosenYear)
        .then(response => this.items = response)
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => this.loading = false);
    },
  },
};
</script>
<style lang="scss">
  @import "../../assets/css/main";

  .item-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: $mq-tablet) {
      flex-direction: row;
    }

    .book-list,
    .movie-list,
    .tvshow-list {
      width: calc(100%);
      @media (min-width: $mq-tablet) {
        width: calc(100%/4);
      }

      ul, li, ol {
        margin: 0;
        padding: 0;
      }

      li {
        counter-increment: list;
        list-style-type: none;
        position: relative;
        margin-left: 15px;
        padding-left: 10px;
        line-height: 2em;

        &::before {
          color: #22113e;
          content: counter(list) ".";
          position: absolute;
          left: -25px;
          text-align: right;
          width: 20px;
        }
      }
    }

    .edit-item {
      padding: 5px 0 10px 0;
      font-size: 12px;

      a, button {
        border-radius: 0;
        background: white;
        color: black;
        border: 0;
        border-bottom: 1px solid #928dcd;
        padding: .2em;
        font-size: 14px;
        margin-right: 10px;
      }
    }
  }

  .total {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background: #e7e6f4;
  }

  .loading {
    background: #e7e6f4;
    padding: 10px;
    border-radius: 5px;
  }
</style>
