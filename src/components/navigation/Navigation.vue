<template>
  <nav class="navigation">
    <RouterLink :to="{ name: 'Index' }"> Home </RouterLink>
    <RouterLink :to="{ name: 'Search' }"> Search </RouterLink>
    <span v-if="isLoggedIn">
      <RouterLink :to="{ name: 'AddItem' }">Add New Item</RouterLink>
      <a href="/" @click="logout()">Logout</a>
    </span>
    <span v-else>
      <RouterLink key="not-logged-in" :to="{ name: 'Login' }">Login</RouterLink>
      <RouterLink v-if="isDev" key="logged-in" :to="{ name: 'Register' }">Register</RouterLink>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      environment: process.env.VUE_APP_ENV,
    };
  },
  props: {
    isLoggedIn: {
      type: Boolean,
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'Index' });
      });
    },
  },
  computed: {
    isDev() {
      return process.env.VUE_APP_ENV === 'development';
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  background: #ececec;
  padding: 20px 0 20px 0;
  text-transform: uppercase;

  a {
    color: #36382e;
    margin: 0 0 0 20px;
  }
}
</style>
