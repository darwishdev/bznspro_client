<script setup lang="ts">
import TeamPartial from 'components/partials/TeamPartial.vue';
import { Team } from 'components/models';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
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

const members: Team[] = [
  {
    name: 'احمد المنهبي',
    title: 'المدير عام',
    img: 'https://static.exploremelon.com/bznspro/manhaby.png',
  },
  {
    name: 'روان احمد',
    title: 'المدير عام',
    img: 'http://localhost:9091/assets/ryady-24461652920210509032652AM.png',
  },

  {
    name: 'احمد درويش',
    title: 'تقنية المعلومات ',
    img: 'https://static.exploremelon.com/bznspro/team/4.png',
  },
  {
    name: 'اسامة المنهبي',
    title: 'التسويق الالكتروني ',
    img: 'https://static.exploremelon.com/bznspro/osama.png',
  },
  {
    name: 'يوسف نضال',
    title: 'التصميم و الميديا ',
    img: 'https://static.exploremelon.com/bznspro/yossuf.png',
  },
  {
    name: ' رحاب المغربي',
    title: 'الخدمات المشتركة ',
    img: 'https://static.exploremelon.com/bznspro/team/3.png',
  }

];
</script>

<template>
  <div class="team full-width">
    <div class="container">
      <h4 class="text-secondary">أعضاء فريق العمل</h4>
      <h3 class="text-black font-weight-bold">تعرف علي فريق العمل</h3>

      <carousel class="teams-carousel" :settings="carouselSettings" :breakpoints="carouselBreakpoints">
        <slide v-for="member in members" :key="member.name">
          <team-partial :member="member" />
        </slide>
        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss">
.team {
  background-image: url(https://static.exploremelon.com/bznspro/team_bg.png);
  padding: 100px 0;

  & .teams-carousel {
    @media (max-width:700pc) {
      margin-top: 80px;

    }
  }

  & h4 {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -10px;
      width: 4px;
      height: 100%;
      background-color: var(--q-primary);
    }
  }

  & .carousel__prev,
  .carousel__next {
    top: -100px;
    // right: -200px;
    background-color: #002e5f;
    color: #fff;
  }

  .carousel--rtl .carousel__next {
    left: auto !important;
    right: 67px !important;
  }
}
</style>
