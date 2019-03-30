<template>
  <div id="app">
    <header class="logo">
      <h1>
        <RouterLink :to="{ name: 'Index' }"> what </RouterLink>
      </h1>
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
};
</script>

<style lang="scss">
  @import "assets/css/main";
  @import url('https://fonts.googleapis.com/css?family=Mr+Dafoe');

  * {
    box-sizing: border-box;
  }

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
      width: 100%;
      display: block;
      margin: 0;
      padding: 0;
      background: -webkit-linear-gradient(#7a53ee, #c0caeb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 4em;
      font-family: 'Mr Dafoe', cursive;
    }
  }
</style>
