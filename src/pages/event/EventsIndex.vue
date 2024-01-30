<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import EventPartial from 'components/partials/EventPartial.vue';
import HomeProgramPartial from 'components/partials/HomeProgramPartial.vue';
import { ref } from 'vue';
const drawer = ref(false);
import type { EventsListRow } from '@buf/ahmeddarwish_bzns-pro-api.bufbuild_es/bznspro/v1/events_event_definitions_pb'
import { useGlobalStore } from '../../stores/global';
const globalStore = useGlobalStore()
// const showFilter = ref(activeCat.value != -1);
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
// const events: EventsListRow[] = globalStore.events
</script>

<template>
  <div class="programms">
    <div class="header bg-secondary q-pa-xl">
      <div class="container text-white">
        <h1 class="underline white">الفعاليات</h1>
        <p class="q-mt-xl text-h6 sm-aligned-paragraph">
          إذا اشتركت في أي من برامجنا، سنقوم بتقديم العديد من المزايا والفوائد لك. ستحصل على فرصة الانضمام إلى شركة شريكة
          من الخارج أو الشرق الأوسط والعمل في بيئة تعاونية مميزة. برامجنا تتنوع وتشمل مجموعة واسعة من المجالات، مثل
          التدريب التقني، التطوير الشخصي، وريادة الأعمال.
        </p>
      </div>
    </div>
    <carousel-section class-name="programs" center-title>
      <template v-slot:title>
        <h3 class="text-left ">احدث فعالياتنا</h3>
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
      </template>
    </carousel-section>
    <div class="container q-mt-xl">
      <div class="header items-center q-mb-xl">
        <h3 class="underline text-center">كل الفعاليات</h3>
        <!-- <q-chip removable class="q-ml-xl q-px-lg q-py-md" color="grey-12" :label="getCurrenCat().name"
          :title="getCurrenCat().name" /> -->
      </div>
      <div class="lt-md flex justify-end q-mb-lg items-center">
        <q-btn icon="filter_alt" class="q-ml-md" round color="secondary" size="md" clicable @click="drawer = !drawer" />
      </div>
      <div class="programms-all-wrapper">
        <div class="program" v-for="event in globalStore.events" :key="event.eventId">
          <event-partial :event="(event as EventsListRow)" />
        </div>


      </div>
    </div>
  </div>
</template>

<style lang="scss">
.programms {
  &-all-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width : 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }

    gap: 50px;
  }

  .header {
    position: relative;

    @media (min-width: 700px) {
      &::before {
        content: 'بزنس برو';
        font-family: Cairo;
        font-size: 150px;
        font-weight: bold;
        position: absolute;
        left: 50px;
        top: -30px;
        color: rgba(168, 168, 168, 0.1);
      }

      &::after {
        content: 'برامجنا';
        font-family: Cairo;
        font-size: 150px;
        font-weight: bold;
        position: absolute;
        right: 50px;
        top: 30px;
        color: rgba(168, 168, 168, 0.1);
      }
    }
  }
}

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
