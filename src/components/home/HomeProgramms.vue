<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import HomeProgramPartial from 'components/partials/HomeProgramPartial.vue';
import { Program } from 'components/models';
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'left',
  wrapAround: true,
};
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const carouselBreakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: 'left',
  },
};
const programs: Program[] = [
  {
    id: 1,
    title: 'صناعة الريادة والابتكار في المنظمات والشركات',
    img: 'https://static.exploremelon.com/bznspro/progs//p1.webp',
    text: 'تركز الورشة على تطوير وتعزيز الإبداع والابتكار الريادي والتفوق بأدوات الذكاء الاصطناعي والعمل على تشجيع التفكير الخلاق ',
    price: 575,
    day: 16,
    month: 'سبتمبر',
    discount: 40,
    discountExpiresAt: '10 يوليو'
  },
  {
    id: 2,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    day: 9,
    month: 'ديسمبر',
    img: 'https://static.exploremelon.com/bznspro/progs/p2.png',
    text: 'تهدف هذه الدورة التدريبية إلى تزويدك بالمهارات والأدوات اللازمة لبناء خطط الأعمال الناجحة للشركات.',
    price: 480
  }
];
</script>

<template>
  <carousel-section class-name="programs" color="#162337" center-title>
    <template v-slot:title>
      <h3 class="text-white text-weight-bold">احدث الفعاليات</h3>
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
        <q-btn icon-right="arrow_back" color="grey" text-color="secondary" @click="$router.push('/programms')" size="lg"
          rounded>المزيد من الفعاليات</q-btn>
      </div>
    </template>
  </carousel-section>
</template>
