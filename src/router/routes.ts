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
        path: '/events',
        name: 'events',
        component: () => import('pages/event/EventsIndex.vue'),
      },
      {
        path: '/events/:id',
        name: 'events-view',
        component: () => import('pages/event/EventsView.vue'),
      },
      {
        path: '/events/:id/checkout',
        name: 'events-checkout',
        component: () => import('pages/event/EventCheckout.vue'),
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
