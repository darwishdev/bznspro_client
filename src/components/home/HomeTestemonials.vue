<script setup lang="ts">
import TestemonialPartial from 'components/partials/TestemonialPartial.vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import type { TestemonialsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_testemonials_definitions_pb'
import { useGlobalStore } from '../../stores/global';
const globalStore = useGlobalStore()
const carouselSettings = {
  itemsToShow: 1,
  dir: 'rtl',
  snapAlign: 'center',
  wrapAround: true,
};
const testemonials: TestemonialsListRow[] = globalStore.testemonials as TestemonialsListRow[]
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
          <slide v-for="testemonial in testemonials" :key="testemonial.testemonialId">
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
</template>
