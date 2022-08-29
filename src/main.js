import Vue from 'vue';
import App from './App.vue';
import OutcomesResearchWrapper from 'shared-code';
import vuetify from './plugins/vuetify'; // path to vuetify export
import mixins from './services/mixins';
import store from './services/store';

Vue.use(OutcomesResearchWrapper);
Vue.mixin(...mixins);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
  mounted() {
    this.$vuetify.lang.defaultLocale = 'en_us';
  },
}).$mount('#app-entry');
