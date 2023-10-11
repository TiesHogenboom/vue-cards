import Vue from 'vue';
import VueRouter from 'vue-router';
import Cards1Page from './views/About.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/cards-1', component: Cards1Page },
  { path: '/cards-2', component: Cards2 },
  { path: '/create-cards', component: CreateCards },
  { path: '/about', component: About },
  { path: '/to-do', component: ToDo },
  
];

const router = new VueRouter({
  routes,
});

export default router;
