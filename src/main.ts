import App from './App.vue';
import router from './router';
import VueCompositionApi, { createApp } from '@vue/composition-api';
import type { CreateElement } from 'vue';
import Vue from 'vue';

Vue.use(VueCompositionApi);

const app = createApp({
  name: 'Root',
  router,
  render: (h: CreateElement) => h(App),
});

app.mount('#app');
