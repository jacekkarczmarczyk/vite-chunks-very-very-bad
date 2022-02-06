import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";

createApp(App).use(createRouter({
    history: createWebHashHistory(),
    routes: [{
        name: 'Home',
        component: () => import('./Home.vue'),
    }],
})).mount('#app')
