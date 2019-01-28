<template>
  <section class="content">
    <section class="form-container">
      <h2>Login</h2>
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
            <input id="username" v-model.trim="login.username" class="form-input" type="text">
          </label>
        </div>

        <div class="form-element">
          <label for="password">
            <span class="form-label">
              Password:
            </span>
            <input id="password" v-model.trim="login.password" class="form-input" type="password">
          </label>
        </div>

        <div class="form-element">
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {},
      errors: [],
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('login', this.login)
        .then(() => this.$router.push({ name: 'Index' }))
        .catch(error => this.errors.push(error.response.data.message));
    },
  },
};
</script>
