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
    title: 'مشروع شركة العقاري',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr1.png',
    cat: 'ماليات',
  },
  {
    id: 2,
    title: 'تطوير خطة عمل لستارت اب',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr2.png',
    cat: 'استشارة ادارية',
  },
  {
    id: 3,
    title: 'استشارة شركات القبيصي',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr3.png',
    cat: 'استشارة ',
  },
  {
    id: 4,
    title: 'مشروع شركة البحرين',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr4.png',
    cat: 'تسويق',
  },
  {
    id: 1,
    title: 'مشروع شركة العقاري',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr1.png',
    cat: 'ماليات',
  },
  {
    id: 2,
    title: 'تطوير خطة عمل لستارت اب',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr2.png',
    cat: 'استشارة ادارية',
  },
  {
    id: 3,
    title: 'استشارة شركات القبيصي',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr3.png',
    cat: 'استشارة ',
  },
  {
    id: 4,
    title: 'مشروع شركة البحرين',
    img: 'https://api-st.alshabalriyadi.net/assets/bznspro/pr4.png',
    cat: 'تسويق',
  },
];
</script>

<template>
  <carousel-section class-name="projects" color="#162337" center-title>
    <template v-slot:title>
      <h3 class="text-white text-weight-bold">احدث مشاريعنا</h3>
    </template>

    <template v-slot:content>
      <div class="container">
        <carousel
          :settings="carouselSettings"
          :breakpoints="carouselBreakpoints"
        >
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
      <div class="row justify-center q-mx-auto q-my-lg">
        <q-btn
          icon-right="arrow_back"
          color="grey"
          text-color="secondary"
          @click="$router.push('/projects')"
          size="lg"
          rounded
          >المزيد من المشاريع</q-btn
        >
      </div>
    </template>
  </carousel-section>
</template>
