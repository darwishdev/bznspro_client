<script setup lang="ts">
import AppSection from 'components/layouts/AppSection.vue';
import { Goal } from 'components/models';
const goals: Goal[] = [
  {
    title: 'رؤيتنا',
    text: ' الشركة السعودية الرائدة في الحلول  <br/> الإستشارية والإستثمارية',
    icon: 'img:https://static.exploremelon.com/bznspro/icons/vision.svg',
  },
  {
    title: 'رسالتنا',
    text: 'تطوير المنظمات وقادة الاعمال نحو المستقبل <br/> بـرؤيـة مـخـتـلـفـة',
    icon: 'img:https://static.exploremelon.com/bznspro/icons/mission.svg',
  },
  {
    title: 'قيمنا',
    text: 'تطوير الأداء، تحقيق النجاح المستدام، <br/>واكتشاف الحلول المبتكرة',
    icon: 'img:https://static.exploremelon.com/bznspro/icons/goal.svg',
  },
];
</script>

<template>
  <app-section class-name="goals" center-title center-content>
    <template v-slot:title>
      <h3 class="text-secondary q-mb-md text-center text-weight-medium  ">
        بزنس برو | Business Pro
      </h3>
      <p class="text-center text-h6 sm-aligned-paragraph">

        الرواد في مجال الاستشارات الإدارية والمالية والاستثمار وحلول الأعمال
      </p>
    </template>

    <template v-slot:content>
      <div class="col-12 col-sm-4 text-center" v-for="goal in goals" :key="goal.title">
        <div>
          <h2 class="text-secondary q-ma-md">
            {{ goal.title }} <q-icon :name="goal.icon" />
          </h2>
          <p class="text-h6" v-html="goal.text"></p>
        </div>
      </div>
    </template>
  </app-section>
</template>
