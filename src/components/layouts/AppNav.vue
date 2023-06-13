<template>
  <q-header reveal class="text-secondary app-header" :class="{ white: $route.fullPath == '/' }">
    <nav class="navbar row justify-between q-px-xl q-py-md">
      <!-- Add the links -->

      <q-list class="row gt-md">
        <q-item clickable v-ripple class="text-center" v-for="item in navItems" :key="item.to" :to="item.to">
          <q-item-section>{{ item.text }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about" class="column">
          <q-item-label><q-btn rounded color="primary" size="md" :label="`اطلب عضويتك`" /></q-item-label>
          <q-item-label class="text-center text-subtitle2" caption>منصة مجتمع الشاب الريادي</q-item-label>
        </q-item>
      </q-list>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="lt-md" />
      <div class="logo">
        <img src="https://static.exploremelon.com/bznspro/logo.png" width="100" />
      </div>
    </nav>
  </q-header>
  <q-drawer v-model="drawer" overlay :width="300" behavior="mobile" bordered class="bg-secondary">
    <div class="flex justify-center q-my-lg">
      <img src="https://static.exploremelon.com/bznspro/logo-light.png" height="" wid />
    </div>

    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in navItems" :key="index">
          <q-item clickable :active="menuItem.text === 'Outbox'" @click="() => $router.push(menuItem.to)" v-ripple
            class="text-white">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.text }}
            </q-item-section>
          </q-item>
          <q-separator />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { NavItem } from 'components/layouts/models';
import { ref } from 'vue';

let drawer = ref(false);
const navItems: NavItem[] = [
  {
    text: 'الرئيسية',
    icon: 'home',
    to: '/',
  },
  {
    text: 'الخدمات',
    icon: 'payments',
    to: '/services',
  },
  {
    text: 'مشاريعنا',
    icon: 'analytics',
    to: '/projects',
  },
  {
    text: 'البرامج',
    icon: 'calendar_month',
    to: '/programms',
  },
  {
    text: 'من نحن',
    icon: 'info',

    to: '/about',
  },
  {
    text: 'مستشارينا',
    icon: 'account_circle',

    to: '/consultunts',
  },
  {
    text: 'المدونة',
    icon: 'article',

    to: '/blog',
  },
  {
    text: 'تواصل معنا',
    icon: 'contact_support',

    to: '/contact',
  },
];
</script>
