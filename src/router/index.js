import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Category from '../pages/Category.vue'
import Cart from '../pages/Cart.vue'
import Product from '../pages/Product.vue'
import ShowCart from '../pages/ShowCart.vue'
import Brands from '../pages/Brands.vue'
import DetailCategory from '../pages/DetailCategory.vue'
import 'primeicons/primeicons.css'

const routes = [
    {
        path: '/',
        name:'/',
        component: Home,
    },
    {
        path: '/category/:id',
        name: 'category',
        component: Category,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
    },
    {
        path: '/showcart/:id',
        name: 'showcart',
        component: ShowCart,
    },
    {
        path: '/brands',
        name: 'brands',
        component:Brands,
    },
    {
        path: '/detailcategory/:id',
        name: 'detailcategory',
        component:DetailCategory,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
