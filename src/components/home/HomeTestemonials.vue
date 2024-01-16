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
    name: 'عبدالعزيز السريع',
    job: 'مستثمر ورجل اعمال',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'AA',
    content: 'المشاريع المطروحة للإستثمار فريدة من نوعها ومشاركتنا معكم أتت من تميز الطرح '
  },
  {
    name: 'نبيل القرعاوي',
    job: 'مستثمر ورجل اعمال',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'NA',
    content: `فريق عمل بزنس برو متميز وذو خبرة واسعة ساهم في تقديم أعمال نوعيه لرواد الأعمال `,
  },
  {
    name: 'مازن بترجي',
    job: 'مستثمر ورجل اعمال',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'MB',
    content: `مشاركتنا في الملتقى الإستثماري حفزت لدينا الرغبة في التواصل البناء للإستثمار في الفرص الواعدة `,
  },
  {
    name: 'بندر بن دعجم',
    job: 'الرئيس التنفيذي لحديد بن دعجم',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'MD',
    content: `تجربتنا مع بزنس برو منحتنا خوض تجربة عملية<br/> أثمرت على نتائج مثمرة `,
  },
  {
    name: 'زياد البسام',
    job: 'مستثمر ورجل اعمال',
    img: 'https://static.exploremelon.com/bznspro/testomnial.png',
    letters: 'MD',
    content: `برامج قيادات الأعمال لتأهيل القيادات الواعدة خطوة استراتيجية لمستقبل الشركات العائلية`,
  },
];
</script>

<template>
  <carousel-section class-name="testemonials" :center-title="false">
    <template v-slot:title>
      <!-- <h4 class="no-margin">&nbsp;اراء العملاء</h4> -->
      <h3 class="no-margin">اراء عملائنا</h3>
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
