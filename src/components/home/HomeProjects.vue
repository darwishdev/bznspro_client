<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import ProjectPartial from 'components/partials/ProjectPartial.vue';
import { Project } from 'components/models';
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'center',
  wrapAround: true,
};
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const carouselBreakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};

const projects: Project[] = [
  {
    id: 1,
    title: 'صناعة المبادرات',
    img: 'https://static.exploremelon.com/bznspro/mobdarat.jpg',
    cat: 'الريادة والابتكار',
  },
  {
    id: 2,
    title: 'مصنع البالونات',
    img: 'https://static.exploremelon.com/bznspro/baloon.webp',
    cat: 'دراسة وتحليل السوق',
  },
  {
    id: 3,
    title: 'الاستثمار التجاري ',
    img: 'https://static.exploremelon.com/bznspro/financialinvest.jpg',
    cat: ' حصص و اسهم الشركات ',
  },
  {
    id: 4,
    title: 'متجر المكتبة الرقمية',
    img: 'https://static.exploremelon.com/bznspro/ebook.webp',
    cat: 'نموذج عمل تجاري ',
  },
  {
    id: 5,
    title: 'تصميم المنتجات',
    img: 'https://static.exploremelon.com/bznspro/prdesign.webp',
    cat: 'التسويق والابتكار',
  }
];
</script>

<template>
  <carousel-section class-name="projects" color="#162337" center-title>
    <template v-slot:title>
      <h3 class="text-white text-weight-bold"> احدث مشاريعنا </h3>
    </template>

    <template v-slot:content>
      <div class="container">
        <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
          <slide v-for="project in projects" :key="project.title">
            <project-partial :project="project" />
          </slide>
          <template #addons>
            <navigation />
            <!-- <pagination /> -->
          </template>
        </carousel>
        <!-- <project-partial v-for="project in projects" :key="project.title" :project="project" /> -->
      </div>
      <!-- <div class="row justify-center q-mx-auto q-my-lg">
        <q-btn icon-right="arrow_back" color="grey" text-color="secondary" @click="$router.push('/projects')" size="lg"
          rounded>المزيد من المشاريع</q-btn>
      </div> -->
    </template>
  </carousel-section>
</template>
