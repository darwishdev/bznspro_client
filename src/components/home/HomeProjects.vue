<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import ProjectPartial from 'components/partials/ProjectPartial.vue';
import type { ProjectsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/public_projects_definitions_pb'
import { useGlobalStore } from '../../stores/global';
const globalStore = useGlobalStore()
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

const projects: ProjectsListRow[] = globalStore.projects as  ProjectsListRow[]
</script>

<template>
  <carousel-section class-name="projects" color="#162337" center-title>
    <template v-slot:title>
      <h3 class="text-white text-weight-bold"> احدث مشاريعنا </h3>
    </template>

    <template v-slot:content>
      <div class="container">
        <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
          <slide v-for="project in projects" :key="project.projectId">
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
