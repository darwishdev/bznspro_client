<template>
  <app-loading v-if="globalStore.loading" />

  <q-layout :class="$route.name" view="hHh lpR fff">
    <app-nav />
    <q-page-container>
      <!-- {{ globalStore.settings }} -->
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script setup lang="ts">
import AppNav from 'components/layouts/AppNav.vue';
import AppFooter from 'components/layouts/AppFooter.vue';
import AppLoading from 'components/layouts/AppLoading.vue';
import { onBeforeMount } from 'vue';
import { useGlobalStore } from 'src/stores/global';
// let loading = ref(true);

const globalStore = useGlobalStore()

onBeforeMount(async () => {
  await globalStore.init()

  // setTimeout(() => (loading.value = false), 300);
});
</script>
