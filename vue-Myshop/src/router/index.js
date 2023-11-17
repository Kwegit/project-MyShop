import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Product from '../components/Carte.vue';
import Admin from '../views/Admin.vue'
import login from '../views/login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
  ],
});

export default router;

