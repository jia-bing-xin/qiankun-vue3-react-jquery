import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/view/Home/index.vue'),
        children: [
            {
                path: '/login',
                component: () => import('@/view/Login/index.vue'),
            },
            {
                path: '/detail',
                component: () => import('@/view/Detail/index.vue'),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
