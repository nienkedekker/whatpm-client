<template>
  <header :class="$style.header">
    <div v-if="isDev" :class="$style.developmentWarning">⚠️ DEV connected with {{ server}} ⚠️</div>
    <h1 :class="$style.logo">
      <router-link :to="{ name: 'Index' }">
        what
      </router-link>
    </h1>
  </header>
</template>
<script>
export default {
  name: 'MainHeader',
  computed: {
    isDev() {
      return process.env.VUE_APP_ENV === 'development';
    },
    server() {
      return process.env.VUE_APP_API_BASE_URL;
    },
  },
};
</script>
<style lang="scss" module>

@import url('https://fonts.googleapis.com/css?family=Mr+Dafoe&display=swap&text=whatpm');
@import "../../assets/css/variables";

.header {
  height: 6.25em;
  padding: 1.25em;
  background-color: $cod-grey;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
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

.developmentWarning {
  background-color: $tanhide-orange;
  color: black;
  padding: 1.25em;
}
</style>
