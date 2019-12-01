<template>
  <nav class="navigation">
    <ul>
      <li>
        <RouterLink :to="{ name: 'Index' }"> Home </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'About' }"> About </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'Search' }"> Search </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'Stats' }"> Stats </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'AddItem' }" v-if="isLoggedIn">Add New Item</RouterLink>
      </li>
      <li>
        <a href="/" @click="logout()" v-if="isLoggedIn">Logout</a>
      </li>
      <li>
        <RouterLink key="not-logged-in" :to="{ name: 'Login' }" v-if="!isLoggedIn">Login</RouterLink>
      </li>
      <li>
        <RouterLink v-if="isDev && !isLoggedIn" key="logged-in" :to="{ name: 'Register' }">Register</RouterLink>
      </li>
    </ul>
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
  padding: 10px;
  text-transform: uppercase;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 10px 0;
  }

  a {
    color: #36382e;
    padding: 10px;
  }
}
</style>
