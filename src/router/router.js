import Main from '@/pages/Main';
import Catalog from '@/pages/Catalog';
import Product from '@/pages/Product';
import Blogs from '@/pages/Blogs';
import Blog from '@/pages/Blog';
import Cart from '@/pages/Cart';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/catalog',
        component: Catalog
    },
    {
        path: '/catalog/_slug',
        component: Product
    },
    {
        path: '/blogs',
        component: Blogs
    },
    {
        path: '/blog/:id',
        component: Blog
    },
    {
        path: '/cart',
        component: Cart
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;