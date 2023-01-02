<template>
  <app-loading v-if="loading" />

  <q-layout v-else view="hHh lpR fff">
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
import AppLoading from 'components/layouts/AppLoading.vue';
import { ref, onMounted } from 'vue';

let loading = ref(true);

onMounted(() => {
  setTimeout(() => (loading.value = false), 300);
});
</script>
