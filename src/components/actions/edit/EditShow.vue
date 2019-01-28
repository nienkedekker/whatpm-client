<template>
  <section class="content">
    <section class="form-container">
      <h2>Edit TV Show</h2>
      <form v-if="isLoggedIn" @submit="editShow">
        <ShowForm :show="show" :errors="errors"></ShowForm>
      </form>
    </section>
  </section>
</template>

<script>
import { actions } from '../../../utils/crudActions';
import ShowForm from '../forms/ShowForm';

export default {
  name: 'EditShow',
  components: { ShowForm },
  mixin: [actions],
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
    actions
      .fetchSingleItemById('shows', this.$route.params.id)
      .then(response => (this.show = response))
      .catch(error => console.log(error));
  },
  methods: {
    editShow(event) {
      event.preventDefault();
      actions
        .updateItem('shows', this.$route.params.id, this.show, this.$router)
        .catch(error => this.errors.push(error.message));
    },
  },
};
</script>
