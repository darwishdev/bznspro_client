<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CarouselSection from 'components/layouts/CarouselSection.vue';
import EventPartial from 'components/partials/EventPartial.vue';
import HomeProgramPartial from 'components/partials/HomeProgramPartial.vue';
import { Cat, Program } from 'components/models';
import { ref } from 'vue';
const activeCat = ref(1);
const drawer = ref(false);
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

const cats: Cat[] = [
  {
    id: 1,
    name: 'الاعمال والشركات',
  }
  // ,
  // {
  //   id: 2,
  //   name: 'الاستشارات',
  // },
  // {
  //   id: 3,
  //   name: 'تطوير الشركات',
  // },
  // {
  //   id: 4,
  //   name: 'التسويق',
  // },
];
const programs: Program[] = [
  {
    id: 1,
    title: 'دورة تطوير مهارات التسويق الرقمي',
    img: 'https://static.exploremelon.com/bznspro/progs//p1.webp',
    text: 'تُركز هذه الدورة على تعليم أحدث استراتيجيات التسويق الرقمي واستخدام الوسائل الإلكترونية للوصول إلى العملاء وزيادة المبيعات.',
    price: 575,
    day: 16,
    month: 'سبنتمبر',
    discount: 40,
    discountExpiresAt: '10 يوليو'
  },
  {
    id: 2,
    title: 'دورة تطوير مهارات الإدارة الفعّالة',
    day: 9,
    month: 'ديسمبر',
    img: 'https://static.exploremelon.com/bznspro/progs/p2.png',
    text: 'هذه الدورة تهدف إلى تطوير مهارات الإدارة والقيادة الفعّالة في العمل وتمكين المشاركين من تحقيق الأهداف المؤسسية.',
    price: 480
  },
  {
    id: 3,
    title: 'دورة تنمية مهارات التفاوض',
    day: 9,
    month: 'ديسمبر',
    img: 'https://static.exploremelon.com/bznspro/progs/p3.png',
    text: 'تسعى هذه الدورة إلى تحسين مهارات التفاوض واتخاذ القرارات الاستراتيجية في الأعمال وتحقيق اتفاقات مربحة للأطراف المشاركة.',
    price: 480
  },

];

function getCurrenCat(): Cat {
  return cats.filter((cats) => cats.id == activeCat.value)[0];
}
</script>

<template>
  <div class="programms">
    <div class="header bg-secondary q-pa-xl">
      <div class="container text-white">
        <h1 class="underline white">الاكاديمية</h1>
        <p class="q-mt-xl text-h6 sm-aligned-paragraph">سنقدم لك العديد من الفرص والمزايا التي ستساعدك على تحقيق النجاح
          كرائد أعمال. ستحصل على فرصة مميزة للتعاون مع شركات شريكة في مناطق متعددة، سواء في الشرق الأوسط أو خارجها، وذلك
          في بيئة تعاونية تعزز من تطور مشروعك الخاص. برامجنا متنوعة وشاملة، حيث نقدم التدريب التقني اللازم لك، ونساعدك في
          تطوير مهاراتك الشخصية، ونمنحك الأسس والمعرفة الضرورية لتحقيق نجاحك في مجال ريادة الأعمال. انضم إلى أكاديمية بزنس
          برو واستعد لرحلة نجاح ملهمة في عالم ريادة الأعمال.
        </p>
      </div>
    </div>

    <div class="container q-mt-xl">
      <div class="header items-center q-mb-xl">
        <h3 class="underline text-left">كل الدورات</h3>
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
          <!-- <div class="program" v-for="program in programs"
            @click.prevent="$router.push({ name: 'academies-view', params: { id: program.id } })" :key="program.title">
            <event-partial :event="event" />
          </div> -->

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
