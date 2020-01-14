<template>
  <div id="app">
    <main-header/>
    <navigation :is-logged-in="isLoggedIn"/>
    <year-navigation/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import MainHeader from './components/navigation/MainHeader';
import YearNavigation from './components/navigation/YearNavigation';
import Navigation from './components/navigation/Navigation';

export default {
  name: 'App',
  components: { YearNavigation, Navigation, MainHeader },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style lang="scss">
@import "assets/css/main";

.content {
  margin: 1.25em 1.25em 6.25em 1.25em;
  @media (min-width: $mq-tablet) {
    margin: 4em;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
