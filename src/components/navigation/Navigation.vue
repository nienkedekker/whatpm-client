<template>
  <nav :class="$style.headerNavigation">
    <ul>
      <li>
        <router-link :to="{ name: 'Index' }">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">
          About
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Search' }">
          Search
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Stats' }">
          Stats
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AddItem' }" v-if="isLoggedIn">
          Add New Item
        </router-link>
      </li>
      <li>
        <a href="/" @click="logout" v-if="isLoggedIn">
          Logout
        </a>
      </li>
      <li>
        <router-link key="not-logged-in" :to="{ name: 'Login' }" v-if="!isLoggedIn">
          Login
        </router-link>
      </li>
      <li>
        <router-link v-if="isDev && !isLoggedIn" key="logged-in" :to="{ name: 'Register' }">
          Register
        </router-link>
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
      this.$store.dispatch('logout')
        .then(() => {
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

<style lang="scss" module>
@import "../../assets/css/variables";

.headerNavigation {
  background-color: $mercury-grey;
  padding: 0.625em;
  text-transform: uppercase;

  li {
    display: inline-block;
    margin: 0.625em 0;
  }

  a, a:active, a:visited, a:focus {
    color: $outerspace-grey;
    padding: 0.625em;

    &:hover {
      color: $fuchsia-blue;
    }
  }
}
</style>
