<template>
  <q-layout view="hHh lpR fff">
    <app-nav />
    <q-page-container>
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script setup lang="ts">
import AppNav from 'components/layouts/AppNav.vue';
import AppFooter from 'components/layouts/AppFooter.vue';
</script>
