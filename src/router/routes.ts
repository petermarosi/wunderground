import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/pages/public/HomePage.vue'),    
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),    
    children: [{ 
      path: '', 
      component: () => import('src/pages/admin/AdminIndexPage.vue') 
    },{ 
      path: 'profile', 
      component: () => import('src/pages/admin/AdminProfilePage.vue')
    }],
    meta: {
      requireAdminAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
