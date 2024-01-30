<script setup lang="ts">
import ServicePartial from 'components/partials/ServicePartial.vue';
import { Service } from 'components/models';
import { useGlobalStore } from '../../stores/global';
import { computed } from 'vue'
import type { ServicesListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_services_definitions_pb'
const globalStore = useGlobalStore()
// const services: ServicesListRow[] = globalStore.services as ServicesListRow[]
const services = computed(() => {
  return globalStore.services.filter((service) => service.tags.includes('مميز')) as ServicesListRow[]
})
</script>

<template>
  <div class="services-section q-pa-lg">
    <div class="container">
      <h3 class="text-black font-weight-bold">تعرف على خدماتنا</h3>
      <div class="row services-section_wrapper justify-center">
        <!-- <h2>{{ globalStore.services }}</h2> -->
        <service-partial v-for="service in services" :key="service.serviceId" :service="(service)" />
      </div>
      <div class="row q-mx-auto q-my-lg">
        <q-btn icon-right="arrow_back" color="grey" text-color="secondary" @click="$router.push('/services')" size="lg"
          rounded>المزيد من الخدمات</q-btn>
      </div>
    </div>
  </div>
</template>
