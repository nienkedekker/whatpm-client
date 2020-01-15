import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Sentry.init({
  dsn: 'https://8a56142115674c9eb3b1d794eee1c930@sentry.io/1883223',
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
});
Vue.prototype.$sentry = Sentry;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
