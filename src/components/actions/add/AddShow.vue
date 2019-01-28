<template>
  <section class="form-container">
    <h2>Add TV Show</h2>
    <form v-if="isLoggedIn" @submit="addShow">
      <ShowForm :show="show" :errors="errors"></ShowForm>
    </form>
  </section>
</template>

<script>
import ShowForm from '../forms/ShowForm';
import { actions } from '../../../utils/crudActions';

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
      actions
        .createItem('shows', this.show, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
