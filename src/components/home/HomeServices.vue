<script setup lang="ts">
import ServicePartial from 'components/partials/ServicePartial.vue';
import {
  Service,
} from 'components/models';

const services: Service[] = [
  {
    id: 1,
    title: 'استشارات مالية',
    content: 'الخدمات الاستشارية القيمةالمختلفة التي تؤثر بشكل',
  },
  {
    id: 1,
    title: 'اسشارات ادارية',
    content: 'الخدمات الاستشارية القيمة المختلفة التي تؤثر بشكل',
  },
  {
    id: 1,
    title: 'تطوير الاعمال والشركات',
    content: 'الخدمات الاستشارية القيمة المختلفة التي تؤثر بشكل',
  },
  {
    id: 1,
    title: 'استشارات مالية',
    content: 'الخدمات الاستشارية القيمة المختلفة التي تؤثر بشكل',
  },
];
</script>

<template>
  <div class="services q-pa-lg">

    <div class="container">
      <h3 class="text-black font-weight-bold">تعرف علي خدماتنا</h3>
      <div class="row services_wrapper justify-center">
        <service-partial v-for="service in services" :key="service.id" :service="service" />
      </div>
    </div>
  </div>
</template>
