<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import CarouselSection from 'components/layouts/CarouselSection.vue';
import HomeProgramPartial from 'components/partials/HomeProgramPartial.vue';
import {
  Program,
} from 'components/models';
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'left',
  wrapAround: true
}
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const carouselBreakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: 'left',
  },
}
const programs: Program[] = [
  {
    id: 1,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: 'prog',
  },
  {
    id: 2,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: '',
  },
  {
    id: 1,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: 'prog',
  },
  {
    id: 2,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: '',
  },
];
</script>


<template>
  <carousel-section class-name="programs" color="#162337" center-title>
    <template v-slot:title>
      <h3 class="text-white text-weight-bold">احدث برامجنا</h3>
    </template>

    <template v-slot:content>
      <div class="container">
        <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
          <slide v-for="program in programs" :key="program.title">
            <home-program-partial :program="program" />
          </slide>
          <template #addons>
            <navigation />
            <!-- <pagination /> -->
          </template>
        </carousel>
        <!-- <program-partial v-for="program in programs" :key="program.title" :program="program" /> -->

      </div>
      <div class="row justify-center q-mx-auto q-my-lg">
        <q-btn icon-right="arrow_back" color="grey" text-color="secondary" size="lg" rounded>المزيد من البرامج</q-btn>
      </div>
    </template>
  </carousel-section>
</template>
