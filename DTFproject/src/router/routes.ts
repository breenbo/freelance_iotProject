import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/devices', component: () => import('pages/Devices.vue') },
      { path: '/firmwares', component: () => import('pages/Firmwares.vue') },
      { path: '/newproduct', component: () => import('pages/NewProduct.vue') },
      { path: '/feedback', component: () => import('pages/Feedback.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
