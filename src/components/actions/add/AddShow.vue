<template>
  <section class="form-container">
    <h2>Add TV Show</h2>
    <form v-if="isLoggedIn" @submit="addShow">
      <show-form :show="show" :errors="errors"/>
    </form>
  </section>
</template>

<script>
import ShowForm from '../forms/ShowForm';
import { createItem } from '../../../utils/crudActions';

export default {
  name: 'AddShow',
  components: { ShowForm },
  data() {
    return {
      show: {},
      errors: [],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    addShow(evt) {
      evt.preventDefault();
      createItem('shows', this.show, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
