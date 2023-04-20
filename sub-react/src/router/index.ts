import { lazy } from 'react';

export default [
    {
        path: '/',
        element: lazy(() => import('@/packages/home')),
    },
    {
        path: '/home',
        element: lazy(() => import('@/packages/home')),
    },
]