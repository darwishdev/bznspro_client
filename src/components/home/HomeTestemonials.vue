<script setup lang="ts">
import AppSection from 'components/layouts/AppSection.vue';
import TestemonialPartial from 'components/partials/TestemonialPartial.vue';

import {
  Testemonial,
} from 'components/models';
const testemonials: Testemonial[] = [
  {
    name: 'هيثم الاحمدي',
    job: 'مدير التسوق بشركة "نهضة"',
    img: '~assets/testomnial.png',
    letters: 'MD',
    content: `" كل الفخر والسعادة تآتيك عندما تجد شخصاً ذو مهنية واحترافية عالية
            جداَ وتعامل أرقى مما تتصور .. بصراحة التعامل معكم مكسب كبير وأنا
            آعتبركم الركيزة الأساسية لي لتنفيذ كافة الاعمال"`,
  },
];
</script>

<template>

  <app-section class-name="testemonials">
    <template v-slot:title>
      <div class="column testemonials_header">
        <h4 class="no-margin">&nbsp;اراء العملاء</h4>
        <h3 class="no-margin">تفقد أراء عملائناالعملاء</h3>
      </div>
    </template>
    <template v-slot:content>
      <testemonial-partial v-for="testemonial in testemonials" :key="testemonial.name" :testemonial="testemonial" />
    </template>
  </app-section>
</template>
