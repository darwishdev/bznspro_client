<script setup lang="ts">
import AppSection from 'components/layouts/AppSection.vue';
import { Goal } from 'components/models';
const goals: Goal[] = [
  {
    title: 'رؤيتنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'img:https://api-st.alshabalriyadi.net/assets/bznspro/icons/vision.svg',
  },
  {
    title: 'رسالتنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'img:https://api-st.alshabalriyadi.net/assets/bznspro/icons/mission.svg',
  },
  {
    title: 'هدفنا',
    text: ' تتجه شركة بزنس برو نحو<br /> نمو ديناميكي و مستدام',
    icon: 'img:https://api-st.alshabalriyadi.net/assets/bznspro/icons/goal.svg',
  },
];
</script>

<template>
  <app-section class-name="goals" center-title center-content>
    <template v-slot:title>
      <h3 class="text-secondary text-center text-weight-medium q-mb-md q-mt-xl">
        نقدم كافة انواع الاستشارات
      </h3>
      <p class="text-center text-h6">
        نطرح علي الطاولة العديد من الخدمات الاستشارية القيمة المختلفة التي تؤثر
        <br />
        بشكل مباشر علي الادارات الاساسية
      </p>
    </template>

    <template v-slot:content>
      <div
        class="col-12 col-sm-4 text-center"
        v-for="goal in goals"
        :key="goal.title"
      >
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
