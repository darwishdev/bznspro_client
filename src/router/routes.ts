import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/services', component: () => import('pages/ServicesPage.vue') },
      { path: '/projects', component: () => import('pages/ProjectsPage.vue') },
      { path: '/blog', component: () => import('pages/blog/BlogIndex.vue') },
      {
        path: '/programms',
        component: () => import('pages/programm/ProgrammsIndex.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
