<template>
  <section class="content">
    <section class="form-container">
      <h2>Register</h2>
      <div v-if="errors">
        <div v-for="error of errors" :key="error.index" class="errors">
          {{ error }}
        </div>
      </div>
      <form @submit="onSubmit">
        <div class="form-element">
          <label for="username">
            <span class="form-label">
              Username:
            </span>
            <input id="username" v-model.trim="register.username" class="form-input" type="text">
          </label>
        </div>

        <div class="form-element">
          <label for="password">
            <span class="form-label">
              Password:
            </span>
            <input id="password" v-model.trim="register.password" class="form-input" type="password">
          </label>
        </div>

        <div class="form-element">
          <button type="submit">
            Register
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      register: {
        type: Object,
      },
      errors: [],
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('register', this.register)
        .then(() => this.$router.push({ name: 'Login' }))
        .catch(error => this.errors.push(error.data.message));
    },
  },
};
</script>
