import { createRouter, createWebHistory } from 'vue-router'
import HelpView from '@/views/HelpView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelpView,
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
        },
        {
            path: '/inicio',
            name: 'inicio',
            component: () => import('@/views/HomeUserView.vue'),
        },
    ],
})

export default router
