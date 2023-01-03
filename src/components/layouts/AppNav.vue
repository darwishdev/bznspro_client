<template>
  <q-header reveal class="text-secondary bg-white">
    <nav class="navbar row justify-between q-px-xl q-py-md">
      <!-- Add the links -->

      <q-list class="row  gt-md">
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
        <img src="~assets/logo.png" width="100" />
      </div>
    </nav>





  </q-header>
  <q-drawer v-model="drawer" overlay :width="300" behavior="mobile" bordered class="bg-secondary ">
    <div class="flex justify-center q-my-lg">
      <img src="~assets/logo-light.png" height="" wid />
    </div>

    <q-scroll-area class="fit">
      <q-list>

        <template v-for="(menuItem, index) in navItems" :key="index">
          <q-item clickable :active="menuItem.text === 'Outbox'" v-ripple class="text-white">
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
import { ref } from 'vue'

let drawer = ref(false);
const navItems: NavItem[] = [
  {
    text: 'الرئيسية',
    icon: 'home',
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
