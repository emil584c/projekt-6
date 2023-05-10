import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'Hvem er vi',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'Kontakt',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
