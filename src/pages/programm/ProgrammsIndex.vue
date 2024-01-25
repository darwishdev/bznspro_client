<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import ProgramPartial from 'components/partials/ProgramPartial.vue';
import HomeProgramPartial from 'components/partials/HomeProgramPartial.vue';
import { Program } from 'components/models';
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

const programs: Program[] = [
  {
    id: 1,
    title: 'صناعة الريادة والابتكار في المنظمات والشركات',
    img: 'https://static.exploremelon.com/bznspro/progs//p1.webp',
    text: 'تركز الورشة على تطوير وتعزيز الإبداع والابتكار الريادي والتفوق بأدوات الذكاء الاصطناعي والعمل على تشجيع التفكير الخلاق ',
    price: 575,
    day: 16,
    month: 'سبنتمبر',
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
  },
  {
    id: 3,
    title: 'دورة تدريبية لبناء خطط الاعمال للشركات',
    day: 9,
    month: 'ديسمبر',
    img: 'https://static.exploremelon.com/bznspro/progs/p3.png',
    text: 'تهدف هذه الدورة التدريبية إلى تزويدك بالمهارات والأدوات اللازمة لبناء خطط الأعمال الناجحة للشركات.',
    price: 480
  },

];

const events :EventsListRow[] = globalStore.events
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
            <slide v-for="event in events" :key="event.eventId">
              <home-program-partial :event="event" />
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
        <!-- <q-drawer v-model="drawer" :width="200" overlay bordered class="bg-secondary">
          <q-scroll-area class="fit">
            <q-list>
              <template v-for="(cat, index) in cats" :key="index">
                <q-item clickable :active="cat.id === activeCat" v-ripple @click.prevent="
                  activeCat = cat.id;
                drawer = false;
                ">
                  <q-item-section class="text-white">
                    {{ cat.name }}
                  </q-item-section>
                </q-item>
                <q-separator />
              </template>
            </q-list>
          </q-scroll-area>
        </q-drawer> -->
      </div>
      <div class="programms-all-wrapper">
        <div class="progs">
          <div class="program" v-for="program in programs" :key="program.title">
            <program-partial :program="program" />
          </div>

        </div>
        <!-- <q-separator vertical class="gt-md" /> -->
        <!-- <div class="column gt-md">
          <h6>التصنيف:</h6>
          <q-list padding class="rounded-borders">
            <q-item clickable v-ripple v-for="cat in cats" :key="cat.id" :active="activeCat === cat.id"
              @click="activeCat = cat.id" active-class="my-menu-link">
              <q-item-section>{{ cat.name }}</q-item-section>
            </q-item>
          </q-list>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.programms {
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
