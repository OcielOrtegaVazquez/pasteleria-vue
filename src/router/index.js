import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import GalleryView from '../views/GalleryView.vue';
import MenuView from '../views/MenuView.vue';
import OrderView from '../views/OrderView.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: GalleryView
    },
    {
        path: '/menu',
        name: 'menu',
        component: MenuView
    },
    {
        path: '/order',
        name: 'order',
        component: OrderView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;