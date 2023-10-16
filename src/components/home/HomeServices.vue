<script setup lang="ts">
import ServicePartial from 'components/partials/ServicePartial.vue';
import { Service } from 'components/models';

const services: Service[] = [
  {
    id: 1,
    title: 'الاستشارات الإدارية',
    content: 'نعمل على تحليل البيانات وتقييم الأداء بهدف التخطيط وتطوير الاستراتيجيات لتحسين وزيادة الإنتاجية وتخفيض التكاليف.',
  },
  {
    id: 2,
    title: 'الاستشارات مالية',
    content: 'تحليل وتقييم البيانات المالية وتحسين الأداء المالي للموارد المالية وتقليل الاعباء المالية بشكل فعال لتحقيق الأرباح المستدامة.',
  },
  // {
  //   id: 3,
  //   title: 'الاستشارات التسويقية ',
  //   content: 'مساعدة الشركات على تحسين استراتيجيات التسويق وتحقيق أهدافها في إيصال منتجاتها أو خدماتها إلى الجمهور المستهدف لتحقيق نمو في المبيعات.',
  // },
  // {
  //   id: 4,
  //   title: 'الحلول الاستثمارية ',
  //   content: 'نقدم حلول وخطط استثمارية متنوعة في كيفية الاستثمار بشكل فعال لتحقيق أفضل عوائد ممكنة مستدامة على المدى الطويل. ',
  // },
];
</script>

<template>
  <div class="services-section q-pa-lg">
    <div class="container">
      <h3 class="text-black font-weight-bold">تعرف على خدماتنا</h3>
      <div class="row services-section_wrapper justify-center">
        <service-partial v-for="service in services" :key="service.id" :service="service" />
      </div>
      <div class="row q-mx-auto q-my-lg">
        <q-btn icon-right="arrow_back" color="grey" text-color="secondary" @click="$router.push('/services')" size="lg"
          rounded>المزيد من الخدمات</q-btn>
      </div>
    </div>
  </div>
</template>
