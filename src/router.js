import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SearchPage from './pages/SearchPage.vue';
import NotificationsPage from './pages/NotificationsPage.vue';
import CartPage from './pages/CartPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import ProductPage from './pages/ProductPage.vue';
import CategoryPage from './pages/CategoryPage.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/search',
      component: SearchPage,
    },
    {
      path: '/notifications',
      component: NotificationsPage,
    },
    {
      path: '/cart',
      component: CartPage,
    },
    {
      path: '/profile',
      component: ProfilePage,
    },
    {
      path: '/product/:id',
      component: ProductPage,
    },
    {
      path: '/category/:id',
      component: CategoryPage,
    },
  ],
});
