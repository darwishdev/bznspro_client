<script setup lang="ts">
import TestemonialPartial from 'components/partials/TestemonialPartial.vue';

import { Testemonial } from 'components/models';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';

const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'center',
  wrapAround: true,
};
const testemonials: Testemonial[] = [
  {
    name: 'هيثم الاحمدي',
    job: 'مدير التسوق بشركة "نهضة"',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'MD',
    content: `" كل الفخر والسعادة تآتيك عندما تجد شخصاً ذو مهنية واحترافية عالية
            جداَ وتعامل أرقى مما تتصور .. بصراحة التعامل معكم مكسب كبير وأنا
            آعتبركم الركيزة الأساسية لي لتنفيذ كافة الاعمال"`,
  },
  {
    name: 'هيثم الاحمدي',
    job: 'مدير التسوق بشركة "نهضة"',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'MD',
    content: `" كل الفخر والسعادة تآتيك عندما تجد شخصاً ذو مهنية واحترافية عالية
            جداَ وتعامل أرقى مما تتصور .. بصراحة التعامل معكم مكسب كبير وأنا
            آعتبركم الركيزة الأساسية لي لتنفيذ كافة الاعمال"`,
  },
  {
    name: 'هيثم الاحمدي',
    job: 'مدير التسوق بشركة "نهضة"',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'MD',
    content: `" كل الفخر والسعادة تآتيك عندما تجد شخصاً ذو مهنية واحترافية عالية
            جداَ وتعامل أرقى مما تتصور .. بصراحة التعامل معكم مكسب كبير وأنا
            آعتبركم الركيزة الأساسية لي لتنفيذ كافة الاعمال"`,
  },
];
</script>

<template>
  <carousel-section class-name="testemonials" :center-title="false">
    <template v-slot:title>
      <h4 class="no-margin">&nbsp;اراء العملاء</h4>
      <h3 class="no-margin">تفقد أراء عملائناالعملاء</h3>
    </template>

    <template v-slot:content>
      <div class="container">
        <carousel :settings="carouselSettings">
          <slide v-for="testemonial in testemonials" :key="testemonial.name">
            <testemonial-partial :testemonial="testemonial" />
          </slide>
          <template #addons>
            <!-- <navigation /> -->
            <pagination />
          </template>
        </carousel>
        <!-- <project-partial v-for="project in projects" :key="project.title" :project="project" /> -->
      </div>
    </template>
  </carousel-section>
  <!-- <app-section class-name="testemonials">
    <template v-slot:title>
      <div class="column testemonials_header">
        <h4 class="no-margin">&nbsp;اراء العملاء</h4>
        <h3 class="no-margin">تفقد أراء عملائناالعملاء</h3>
      </div>
    </template>
    <template v-slot:content>
      <carousel-section class-name="projects" color="#162337" center-title>
        <testemonial-partial
          v-for="testemonial in testemonials"
          :key="testemonial.name"
          :testemonial="testemonial"
        />
      </carousel-section>
    </template>
  </app-section> -->
</template>
