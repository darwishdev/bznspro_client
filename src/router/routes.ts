import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
      },
      {
        path: '/services',
        name: 'services',
        component: () => import('pages/ServicesPage.vue'),
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('pages/ProjectsPage.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('pages/ContactPage.vue'),
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import('pages/blog/BlogIndex.vue'),
      },
      {
        path: '/blog/:id',
        name: 'blog-view',
        component: () => import('pages/blog/BlogView.vue'),
      },
      {
        path: '/consultunts',
        name: 'consultunts',
        component: () => import('pages/ConsultuntsPage.vue'),
      },
      {
        path: '/programms',
        name: 'programms',
        component: () => import('pages/programm/ProgrammsIndex.vue'),
      },
      {
        path: '/programms/:id',
        name: 'programms-view',
        component: () => import('pages/programm/ProgrammsView.vue'),
      },
      {
        path: '/programms/:id/checkout',
        name: 'programms-checkout',
        component: () => import('pages/programm/ProgramCheckout.vue'),
      },
      {
        path: '/academies',
        name: 'academies',
        component: () => import('pages/academy/AcademiesIndex.vue'),
      },
      {
        path: '/academies/:id',
        name: 'academies-view',
        component: () => import('pages/academy/AcademiesView.vue'),
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
