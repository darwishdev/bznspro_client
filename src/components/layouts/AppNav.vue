<template>
  <q-header reveal class="text-secondary bg-white">
    <nav class="navbar row justify-between q-px-xl q-py-md">
      <!-- Add the links -->

      <q-list class="row">
        <q-item
          clickable
          v-ripple
          class="text-center"
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
        >
          <q-item-section>{{ item.text }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about" class="column">
          <q-item-label
            ><q-btn rounded color="primary" size="md" :label="`اطلب عضويتك`"
          /></q-item-label>
          <q-item-label class="text-center text-subtitle2" caption
            >منصة مجتمع الشاب الريادي</q-item-label
          >
        </q-item>
      </q-list>
      <div class="logo">
        <img src="~assets/logo.png" width="100" />
      </div>
    </nav>
  </q-header>
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
