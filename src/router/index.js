import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Cards1View from '../views/Cards1View.vue'
import Cards2View from '../views/Cards2View.vue'
import CreateCardView from '../views/CreateCardView.vue'
import TodoView from '../views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cards-1',
      name: 'cards1',
      component: Cards1View,
    },
    {
      path: '/cards-2',
      name: 'cards2',
      component: Cards2View,
    },
    {
      path: '/create-card',
      name: 'createcard',
      component: CreateCardView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/to-do',
      name: 'todo',
      component: TodoView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ()=> import('@/views/NotFoundView.vue')
    },
    
    
  ],
})

export default router
