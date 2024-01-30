<script setup lang="ts">
import AppSection from 'components/layouts/AppSection.vue';
import { Goal } from 'components/models';
import { useGlobalStore } from '../../stores/global';
const globalStore = useGlobalStore()
const goals: Goal[] = [
  {
    title: 'رؤيتنا',
    text: 'vision',
    icon: 'img:https://static.exploremelon.com/bznspro/icons/vision.svg',
  },
  {
    title: 'رسالتنا',
    text: 'message',
    icon: 'img:https://static.exploremelon.com/bznspro/icons/mission.svg',
  },
  {
    title: 'قيمنا',
    text: 'values',
    icon: 'img:https://static.exploremelon.com/bznspro/icons/goal.svg',
  },
];
</script>

<template>
  <app-section class-name="goals" center-title center-content>
    <template v-slot:title>
      <h3 class="text-secondary q-mb-md text-center text-weight-medium  ">
        {{ globalStore.getSettingByKey('site_title') }}
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
          <div v-html="globalStore.getSettingByKey(goal.text)"></div>
        </div>
      </div>
    </template>
  </app-section>
</template>
