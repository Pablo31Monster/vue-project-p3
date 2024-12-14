import { createRouter, createWebHistory } from 'vue-router'
import HomeUserView from '@/views/HomeUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeUser',
      component: HomeUserView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
        path: '/valorar',
        name: 'valorar',
        component: () => import('@/views/ValorarView.vue'),
    }
  ],
})

export default router
