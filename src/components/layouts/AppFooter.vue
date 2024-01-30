<template>
  <q-footer class="text-white bg-secondary">
    <contact-banner v-if="$route.fullPath != '/services' && $route.fullPath != '/contact'" />
    <!-- <div class="container">
      <nav class="navbar row justify-between footer_content q-pt-xl">
        <div class="column col-auto justify-center items-center">
          <img src="https://static.exploremelon.com/bznspro/logo-light.png" class="text-center q-mb-lg" width="150" />
          <p class="mw-200 text-center">{{ aboutBreif }}</p>
        </div>

        <q-list class="text-center col-auto items-center" v-for="list in lists" :key="list.title">
          <span class="text-white text-center text-bold underline">{{
            list.title
          }}</span>

          <div class="q-mt-md">
            <q-item clickable :hoverable="false" v-ripple class="text-center no-padding" v-for="item in list.links"
              :key="item.to" :to="item.to">
              <q-item-section>{{ item.text }}</q-item-section>
            </q-item>
          </div>
        </q-list>
      </nav>
    </div> -->
    <!-- <hr class="bg-secondary" /> -->
    <div class="row bg-secondary q-pt-md q-pa-4 justify-around items-center">
      <div class="container">

        <div class="content">
          <img src="https://static.exploremelon.com/bznspro/logo-light.png" width="100" />
          <div class="logo">
            <span class="">{{ globalStore.settingsMap['copyrights'] }}</span>
          </div>

          <span class="">
            <!-- {{ follwUs }} -->
            <!-- {{ $route.name }} -->
            <q-btn v-for="link in socialLinks" flat round color="white" :key="link.icon" :icon="link.icon"
              @click="openLink(link.url)" />
          </span>

        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
import ContactBanner from 'components/layouts/ContactBanner.vue';
import { NavItem, FooterLists, SocialLink } from 'components/layouts/models';
import { useGlobalStore } from 'stores/global'
const globalStore = useGlobalStore()
const openLink = (url: string) => {
  window.open(url, '_blank')
}
const copyRights = globalStore.settingsMap['copyrights'];
const follwUs = ' يمكنك متابعتنا علي : ';
const socialLinks: SocialLink[] = [

  {
    icon: 'ion-logo-youtube',
    url: globalStore.settingsMap['youtube'],
  },
  {
    icon: 'ion-logo-twitter',
    url: globalStore.settingsMap['twitter'],
  },
  {
    icon: 'ion-logo-instagram',
    url: globalStore.settingsMap['instagram'],
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
    text: globalStore.settingsMap['email'],
    to: '',
  },
  {
    text: globalStore.settingsMap['phone'],
    to: '',
  },
  {
    text: globalStore.settingsMap['address'],
    to: '/contact',
  },
];

</script>
