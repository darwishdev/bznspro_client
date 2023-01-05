<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import CarouselSection from 'components/layouts/CarouselSection.vue';
import ProgramPartial from 'components/partials/ProgramPartial.vue';
import HomeProgramPartial from 'components/partials/HomeProgramPartial.vue';
import {
  Cat,
  Program,
} from 'components/models';
import { ref } from 'vue'
const activeCat = ref(1)
const showFilter = ref(activeCat.value != -1)
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


const cats: Cat[] = [
  {
    id: 1,
    name: 'الاعمال والشركات',
  },
  {
    id: 2,
    name: 'الاستشارات',
  },
  {
    id: 3,
    name: 'تطوير الشركات',
  },
  {
    id: 4,
    name: 'التسويق',
  },
];
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
    id: 3,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: 'prog',
  },
  {
    id: 4,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: '',
  },
  {
    id: 5,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: 'prog',
  },
  {
    id: 6,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    text: 'مجموعة أفيستا هي شركة تخطيط وتصميم وتشغيل تعمل على إحياء المشروعات الثقافية والترفيهية',
    img: '',
  },
];



function getCurrenCat(): Cat {
  return cats.filter((cats) => cats.id == activeCat.value)[0]

}
</script>


<template>
  <div class="programms">
    <div class="header bg-secondary q-pa-xl">
      <div class="container text-white">
        <h1 class="underline white">البرامج</h1>
        <p class="q-mt-xl text-h6">كونك احد المتدربين في هذا البرنامجج و سوف تلتحق بالعمل في احدي الشركات المتعاونة في
          شركات من
          الخارج و الشرق
          الاوسط و تتنوع مزايا برامجنا</p>

      </div>
    </div>
    <carousel-section class-name="programs" center-title>
      <template v-slot:title>
        <h3 class="text-left text-weight-mediumn">احدث برامجنا</h3>
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

      </template>
    </carousel-section>
    <div class="container q-mt-xl">
      <div class="header items-center q-mb-xl">
        <h3 class="underline text-left"> كل البرامج</h3>
        <q-chip removable class="q-ml-xl q-px-lg q-py-md" color="grey-12" :label="getCurrenCat().name"
          :title="getCurrenCat().name" />
      </div>
      <div class="programms-all-wrapper">
        <div class="progs">
          <div class="program" v-for="program in programs" :key="program.title">
            <program-partial :program="program" />
          </div>
        </div>
        <q-separator vertical />
        <div class="column">
          <h6>التصنيف:</h6>
          <q-list padding class="rounded-borders ">
            <q-item clickable v-ripple v-for="cat in cats" :key="cat.id" :active="activeCat === cat.id"
              @click="activeCat = cat.id" active-class="my-menu-link">


              <q-item-section>{{ cat.name }}</q-item-section>
            </q-item>


          </q-list>

        </div>

      </div>
    </div>



  </div>
</template>


<style lang="scss">
.programms .q-item--active {
  color: #fff;
  font-weight: 800;
  background-color: $blue !important;

  & .q-item__section::after {
    width: 0 !important;
    background-color: $blue;
  }
}
</style>
