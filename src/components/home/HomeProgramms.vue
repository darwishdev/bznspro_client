<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import HomeProgramPartial from 'components/partials/HomeProgramPartial.vue';
import type { EventsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import { useGlobalStore } from '../../stores/global';
const globalStore = useGlobalStore()
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
// const events: EventsListRow[] = globalStore.events as EventsListRow[]
</script>

<template>
  <carousel-section class-name="programs" color="#162337" center-title>
    <template v-slot:title>
      <h3 class="text-white text-weight-bold">احدث الفعاليات </h3>
    </template>

    <template v-slot:content>
      <div class="container">
        <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
          <slide v-for="event in globalStore.events" :key="event.eventId">
            <home-program-partial :event="(event as EventsListRow)" />
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
