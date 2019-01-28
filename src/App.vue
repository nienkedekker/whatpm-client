<template>
  <div id="app">
    <header class="logo">
      <h1>what.</h1>
    </header>
    <Navigation :is-logged-in="isLoggedIn"></Navigation>
    <YearNavigation> </YearNavigation>
    <Transition name="fade" mode="out-in">
      <RouterView></RouterView>
    </Transition>
  </div>
</template>

<script>
import YearNavigation from './components/navigation/YearNavigation';
import Navigation from './components/navigation/Navigation';

export default {
  name: 'App',
  components: { YearNavigation, Navigation },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  mounted() {
    console.log('lala');
    console.log(process.env.VUE_APP_API_BASE_URL);
  },
};
</script>

<style lang="scss">
  @import "assets/css/main";

  .content {
    margin: 20px 20px 100px 20px;
    @media (min-width: $mq-tablet) {
      margin: 50px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .logo {
    height: 100px;
    padding: 20px;
    background-color: #141414;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      display: block;
      margin: 0;
      padding: 0;
      color: yellow;
      font-size: 2em;
    }
  }
</style>
