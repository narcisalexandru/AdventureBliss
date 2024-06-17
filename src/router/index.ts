import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CursuriView from "@/views/CursuriView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cursuri/:courseId',
        name: 'cursuri',
        component: CursuriView
    },
    {
        path: '/intrebari-frecvente',
        name: 'intrebari-frecvente',
        component: () => import('@/views/IntrebariFrecventeView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue')
    },
    {
        path: '/all-reviews',
        name: 'all-reviews',
        component: () => import('@/views/AllReviewsView.vue')
      },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
