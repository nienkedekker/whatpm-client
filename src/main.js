import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Sentry.init({
  dsn: `${process.env.VUE_APP_SENTRY_DSN}`,
  integrations: [new Integrations.Vue({ Vue, attachProps: true })],
});
Vue.prototype.$sentry = Sentry;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
