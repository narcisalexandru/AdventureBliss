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
        path: '/despre-noi',
        name: 'despre-noi',
        component: () => import('@/views/DespreNoiView.vue')
    },
    {
        path: '/intrebari-frecvente',
        name: 'intrebari-frecvente',
        component: () => import('@/views/IntrebariFrecventeView.vue')
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
