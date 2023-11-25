import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import OtherLayout from '@/layouts/OtherLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: DefaultLayout,
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          breadcrumb: {
            hidden: true
          }
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
  {
    path: '/user',
    meta: {
      layout: OtherLayout,
      breadcrumb: {
        title: 'User',
        disabled: true,
      }
    },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/user/UserProfile.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/user/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/user/Register.vue'),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
