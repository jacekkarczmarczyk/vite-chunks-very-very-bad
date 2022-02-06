import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter();

router.addRoutes([{
  path: '/home',
  component: () => import('../views/Home.vue'),
}]);

export default router;
