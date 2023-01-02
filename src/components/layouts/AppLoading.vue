<template>
  <div class="loading bg-secondary">
    <div class="logo">
      <img src="~assets/logo-light.png" />
    </div>
    <q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="primary"
      class="q-ma-md"
    />
  </div>
</template>

<script setup lang="ts">
import { NavItem } from 'components/layouts/models';

const navItems: NavItem[] = [
  {
    text: 'الرئيسية',
    to: '/',
  },
  {
    text: 'الخدمات',
    to: '/services',
  },
  {
    text: 'مشاريعنا',
    to: '/projects',
  },
  {
    text: 'البرامج',
    to: '/programms',
  },
  {
    text: 'من نحن',
    to: '/about',
  },
  {
    text: 'مستشارينا',
    to: '/consultunts',
  },
  {
    text: 'المدونة',
    to: '/blog',
  },
  {
    text: 'تواصل معنا',
    to: '/contact',
  },
];
</script>
