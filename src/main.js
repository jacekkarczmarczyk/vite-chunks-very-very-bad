import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";

createApp(App).use(createRouter({
    history: createWebHashHistory(),
    routes: [{
        component: () => import('./Home.vue'),
    }, {
        component: () => import('./View1.vue'),
    }, {
        component: () => import('./View2.vue'),
    }, {
        component: () => import('./View3.vue'),
    }],
})).mount('#app')
