<template>
  <section class="content">
    <section class="form-container">
      <h2>Edit TV Show</h2>
      <form v-if="isLoggedIn" @submit="editShow">
        <show-form :show="show" :errors="errors"/>
      </form>
    </section>
  </section>
</template>

<script>
import { fetchSingleItemById, updateItem } from '../../../utils/crudActions';
import ShowForm from '../forms/ShowForm';

export default {
  name: 'EditShow',
  components: { ShowForm },
  data() {
    return {
      errors: [],
      show: {},
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    fetchSingleItemById('shows', this.$route.params.id)
      .then(response => (this.show = response))
      .catch(error => console.log(error));
  },
  methods: {
    editShow(event) {
      event.preventDefault();
      updateItem('shows', this.$route.params.id, this.show, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
