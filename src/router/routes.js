// router/routes.js
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/supply',
        name: 'supply',
        component: () => import('@/views/SupplyView.vue'),
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/DetailView.vue'),
    },
    {
        path: '/market',
        name: 'market',
        component: () => import('@/views/MarketView.vue'),
    },
    {
        path: '/procure',
        name: 'procure',
        component: () => import('@/views/ProcureView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
    },
    // test
    {
        path: '/test1',
        name: 'test1',
        component: () => import('@/views/TestView1.vue'),
    },
    {
        path: '/test2',
        name: 'test2',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/TestView2.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundView,
    },
];

export default routes;
