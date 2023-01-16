<template>
  <q-footer class="text-white bg-secondary">
    <contact-banner
      v-if="$route.fullPath != '/services' && $route.fullPath != '/contact'"
    />
    <div class="container">
      <nav class="navbar row justify-between footer_content q-pt-xl">
        <!-- Add the links -->
        <div class="column col-auto justify-center items-center">
          <img
            src="https://api-st.alshabalriyadi.net/assets/bznspro/logo-light.png"
            class="text-center q-mb-lg"
            width="150"
          />
          <p class="mw-200 text-center">{{ aboutBreif }}</p>
        </div>

        <q-list
          class="text-center col-auto items-center"
          v-for="list in lists"
          :key="list.title"
        >
          <span class="text-white text-center text-bold underline">{{
            list.title
          }}</span>

          <div class="q-mt-md">
            <q-item
              clickable
              :hoverable="false"
              v-ripple
              class="text-center no-padding"
              v-for="item in list.links"
              :key="item.to"
              :to="item.to"
            >
              <q-item-section>{{ item.text }}</q-item-section>
            </q-item>
          </div>
        </q-list>
      </nav>
    </div>
    <hr class="bg-secondary" />
    <div class="row bg-secondary no-padding justify-around items-center">
      <span class="">{{ copyRights }}</span>

      <span class="">
        {{ follwUs }}
        {{ $route.name }}
        <q-btn
          v-for="link in socialLinks"
          flat
          round
          color="white"
          :key="link.icon"
          :icon="link.icon"
        />
      </span>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
import ContactBanner from 'components/layouts/ContactBanner.vue';

import { NavItem, FooterLists, SocialLink } from 'components/layouts/models';
const copyRights = 'بزنس برو. جميع حقوق النشر محفوظة';
const follwUs = ' يمكنك متابعتنا علي : ';
const socialLinks: SocialLink[] = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/',
  },
  {
    icon: 'ion-logo-twitter',
    url: 'https://www.twitter.com/',
  },
  {
    icon: 'ion-logo-instagram',
    url: 'https://www.instagram.com/',
  },
];
const aboutBreif =
  'الشركة السعودية الرائدة في تقديم خدمات الاستشارات الإدارية والمالية وحلول الاعمال ';
const websiteItems: NavItem[] = [
  {
    text: 'من نحن',
    to: '/about',
  },
  {
    text: 'الخدمات',
    to: '/services',
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

const blogItems: NavItem[] = [
  {
    text: 'كيفف تنموا الشركات؟',
    to: '/blog',
  },
  {
    text: 'تاثر الاستشارات علي نمو المشاريع',
    to: '/blog',
  },
  {
    text: 'لماذا يحتاج مشروعك لاستشارات مالية و ادارية؟',
    to: '/blog',
  },
];

const contactItems: NavItem[] = [
  {
    text: 'info@businesspor@gmail.com',
    to: '/blog',
  },
  {
    text: '+96615855555',
    to: '/blog',
  },
  {
    text: 'السعودية, الرياض , جدة',
    to: '/blog',
  },
];

const lists: FooterLists[] = [
  {
    title: 'الموقع',
    links: websiteItems,
  },
  {
    title: 'المدونة',
    links: blogItems,
  },
  {
    title: 'تواصل معنا',
    links: contactItems,
  },
];
</script>
